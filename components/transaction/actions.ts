"use server";
import { z } from "zod";
import { del, put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getImageById } from "./data";

//SCHEMA

const UploadSchema = z.object({
  nama: z.string().min(1),
  email: z.string().min(1),
  wa: z.string().min(1),
  id_product: z.string().min(1),
  nama_product: z.string().min(1),
  harga: z.string().min(1),
  size: z.string().min(1),
  qty: z.string().min(1),
  berat: z.string().min(1),
  keterangan: z.string().min(1),
  ongkir: z.string().min(1),
  pajak: z.string().min(1),
  disc: z.string().min(1),
  total: z.string().min(1),
  kurir: z.string().min(1),
  alamat_kirim: z.string().min(1),
  hp: z.string().min(1),
  update_kirim: z.string().min(1),
  status_kirim: z.string().min(1),
});

const EditSchema = z.object({
  nama: z.string().min(1),
  email: z.string().min(1),
  wa: z.string().min(1),
  id_product: z.string().min(1),
  nama_product: z.string().min(1),
  harga: z.string().min(1),
  size: z.string().min(1),
  qty: z.string().min(1),
  berat: z.string().min(1),
  keterangan: z.string().min(1),
  ongkir: z.string().min(1),
  pajak: z.string().min(1),
  disc: z.string().min(1),
  total: z.string().min(1),
  kurir: z.string().min(1),
  alamat_kirim: z.string().min(1),
  hp: z.string().min(1),
  update_kirim: z.string().min(1),
  status_kirim: z.string().min(1),
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
    update_kirim,
    status_kirim,
  } = validatedFields.data;

  try {
    await prisma.trsingle.create({
      data: {
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
        update_kirim,
        status_kirim,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }
};

//EDIT

//Update Image

export const updateData = async (
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

  const data = await getImageById(id);
  if (!data) return { message: "No Data Found" };

  const {
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
    update_kirim,
    status_kirim,
  } = validatedFields.data;

  try {
    await prisma.trsingle.update({
      data: {
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
        update_kirim,
        status_kirim,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath("/");
  redirect("/");
};

//DELETE

//Delete Image

export const deleteData = async (id: string) => {
  const data = await getImageById(id);
  if (!data) return { message: "No data found" };
  try {
    await prisma.trsingle.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/");
};
