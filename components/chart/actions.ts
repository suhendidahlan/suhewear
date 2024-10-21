"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getProductById } from "@/components/chart/data";
import { z } from "zod";

const UploadSchema = z.object({
  id_product: z.string().min(1),
  nama_product: z.string().min(1),
  image_product: z.string().min(1),
  user_id: z.string().min(1),
  berat: z.coerce.number(),
  size: z.string().min(1),
  harga: z.coerce.number(),
  qty: z.coerce.number(),
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
    id_product,
    nama_product,
    image_product,
    user_id,
    berat,
    harga,
    size,
    qty,
  } = validatedFields.data;

  try {
    await prisma.chart.create({
      data: {
        id_product,
        nama_product,
        image_product,
        user_id,
        berat,
        harga,
        size,
        qty,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }
  revalidatePath("/products/chart");
};

//DELETE

export const deleteData = async (id: string) => {
  // const data = await getProductById(id);
  // if (!data) return { message: "No data found" };
  try {
    await prisma.chart.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/products/chart");
};
