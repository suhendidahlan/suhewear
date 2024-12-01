"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getDataById } from "./data";
import nodemailer from "nodemailer";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const UploadSchema = z.object({
  user_id: z.string().min(1),
  nama: z.string().min(1),
  email: z.string().email("Invalid Email !"),
  wa: z.string().min(1),
  id_product: z.string().min(1),
  nama_product: z.string().min(1),
  harga: z.coerce.number(),
  size: z.string().min(1),
  qty: z.coerce.number(),
  berat: z.coerce.number(),
  keterangan: z.string().min(1),
  ongkir: z.coerce.number(),
  pajak: z.coerce.number(),
  disc: z.coerce.number(),
  total: z.coerce.number(),
  kurir: z.string().min(1),
  alamat_kirim: z.string().min(1),
  hp: z.string().min(1),
  city: z.string().min(1),
});

const EditSchema = z.object({
  status_kirim: z.string().min(1),
  update_kirim: z.string().min(1),
  resi: z.any(),
});

const CekDiskonSchema = z.object({
  token: z.string().min(1),
});

//STORE

export const storeData = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    user_id,
    nama,
    email,
    wa,
    id_product,
    nama_product,
    harga,
    size,
    qty,
    berat,
    keterangan,
    ongkir,
    pajak,
    disc,
    total,
    kurir,
    alamat_kirim,
    hp,
    city,
  } = validatedFields.data;

  try {
    await prisma.trsingle.create({
      data: {
        user_id,
        nama,
        email,
        wa,
        id_product,
        nama_product,
        harga,
        size,
        qty,
        berat,
        keterangan,
        ongkir,
        pajak,
        disc,
        total,
        kurir,
        alamat_kirim,
        hp,
        city,
      },
    });

    await prisma.user.update({
      data: {
        diskon: 0,
      },
      where: { id: user_id },
    });

    await prisma.chart.deleteMany({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }

  const pesanToAdmin: string =
    "Order Masuk : " +
    "Nama : " +
    nama +
    " , No HP : " +
    wa +
    " , Tipe Transaksi : MULTI TRANSACTION " +
    " , Produk : " +
    nama_product;

  const pesanToCustomer: string =
    "Notifikasi create order product di SUHE Activewear Apparel. Dengan ID Produk sebagai berikut: " +
    "Nama Customer : " +
    nama +
    ", Nama Product : " +
    nama_product +
    ", Total Belanja : " +
    rupiah.format(total) +
    ". Silahkan lakukan pembayaran melalui gateway yang tersedia. Apabila terdapat masalah, silahkan hubungi WhatsApp admin berikut : 0859 - 6238 - 4140. Terima kasih telah berbelanja di SUHE Activewear Apparel.";

  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: "suheweardotcom@gmail.com",
      subject: "ORDER MASUK _ SUHE APPAREL",
      text: "suhendi dahlan apparel",
      html: pesanToAdmin,
    });
  } catch (error) {
    return { message: "Failed to register data" };
  }

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "ORDER SUHE_APPAREL",
      text: "New Order Notification",
      html: { path: `components/nodemailer/orderCustomer.html` },
    });
  } catch (error) {
    return { message: "Failed to register data" };
  }

  revalidatePath("/products/checkout/transaksi");
  redirect("/products/checkout/transaksi");
};

//DELETE

export const deleteData = async (id: string) => {
  try {
    await prisma.trsingle.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/products/checkout/transaksi");
  redirect("/products/checkout/transaksi");
};

export const deleteDataAdmin = async (id: string) => {
  try {
    await prisma.trsingle.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/dashboard/transactions");
  redirect("/dashboard/transactions");
};

//EDIT ADMIN TRANSACTION

export const updateDataTransaction = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getDataById(id);
  if (!data) return { message: "No Data Found" };

  const { status_kirim, update_kirim, resi } = validatedFields.data;

  try {
    await prisma.trsingle.update({
      data: {
        status_kirim,
        update_kirim,
        resi,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath("/dashboard/transactions");
  redirect("/dashboard/transactions");
};

export const cekDiskon = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = CekDiskonSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { token } = validatedFields.data;

  const tokenDiskon = await prisma.tokenDiskon.findUnique({
    where: { token: token },
  });

  if (tokenDiskon) {
    if (tokenDiskon.isActive == true) {
      const jmlDiskon = tokenDiskon.jumlah - 1;
      if (tokenDiskon.kategori === "percent") {
        if (tokenDiskon.jumlah > 1) {
          try {
            await prisma.user.update({
              data: {
                diskon: tokenDiskon.percent !== null ? tokenDiskon.percent : 0,
              },
              where: { id },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          try {
            await prisma.tokenDiskon.update({
              data: {
                jumlah: jmlDiskon,
              },
              where: { token },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          revalidatePath("/products/chart");
          return {
            message:
              "Selamat, anda mendapatkan potongan harga sebesar " +
              tokenDiskon.percent +
              " %. Berlaku secara otomatis saat anda melakukan checkout.",
          };
        } else if (tokenDiskon.jumlah == 1) {
          try {
            await prisma.user.update({
              data: {
                diskon: tokenDiskon.percent !== null ? tokenDiskon.percent : 0,
              },
              where: { id },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          try {
            await prisma.tokenDiskon.update({
              data: {
                jumlah: jmlDiskon,
                isActive: false,
              },
              where: { token },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          revalidatePath("/products/chart");
          return {
            message:
              "Selamat, anda mendapatkan potongan harga sebesar " +
              tokenDiskon.percent +
              " %. Berlaku secara otomatis saat anda melakukan checkout.",
          };
        }
      } else if (tokenDiskon.kategori === "nominal") {
        if (tokenDiskon.jumlah > 1) {
          try {
            await prisma.user.update({
              data: {
                kredit: tokenDiskon.nominal !== null ? tokenDiskon.nominal : 0,
              },
              where: { id },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          try {
            await prisma.tokenDiskon.update({
              data: {
                jumlah: jmlDiskon,
              },
              where: { token },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          revalidatePath("/products/chart");
          return {
            message:
              "Selamat, anda mendapatkan potongan harga sebesar " +
              rupiah.format(
                tokenDiskon.nominal !== null ? tokenDiskon.nominal : 0
              ) +
              " %. Berlaku secara otomatis saat anda melakukan checkout.",
          };
        } else if (tokenDiskon.jumlah == 1) {
          try {
            await prisma.user.update({
              data: {
                kredit: tokenDiskon.nominal !== null ? tokenDiskon.nominal : 0,
              },
              where: { id },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          try {
            await prisma.tokenDiskon.update({
              data: {
                jumlah: jmlDiskon,
                isActive: false,
              },
              where: { token },
            });
          } catch (error) {
            return { message: "Failed to update data" };
          }
          revalidatePath("/products/chart");
          return {
            message:
              "Selamat, anda mendapatkan potongan harga sebesar " +
              rupiah.format(
                tokenDiskon.nominal !== null ? tokenDiskon.nominal : 0
              ) +
              " %. Berlaku secara otomatis saat anda melakukan checkout.",
          };
        }
      }
    } else if (tokenDiskon.isActive == false) {
      return { message: "Maaf, Kupon anda tidak sesuai" };
    }
  } else {
    return { message: "Maaf, Kupon anda tidak sesuai" };
  }
};
