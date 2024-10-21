"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getListProducts } from "@/components/chart/data";
import { z } from "zod";
import { redirect } from "next/navigation";

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

    await prisma.chart.deleteMany({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
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
  revalidatePath("/");
};
