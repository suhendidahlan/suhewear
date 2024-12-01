"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getTokenDiscById } from "@/components/token-diskon/data";

//SCHEMA

const StoreSchema = z.object({
  token: z.string().min(1),
  kategori: z.string().min(1),
  jumlah: z.coerce.number(),
  percent: z.coerce.number(),
  nominal: z.coerce.number(),
  poin: z.coerce.number(),
  product: z.any(),
});

export const storeData = async (prevState: unknown, formData: FormData) => {
  const validatedFields = StoreSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { token, kategori, jumlah, percent, nominal, poin, product } =
    validatedFields.data;

  try {
    await prisma.tokenDiskon.create({
      data: {
        token: "SUHE" + token + Math.random().toString(32).slice(6),
        kategori,
        jumlah,
        percent,
        nominal,
        poin,
        product,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }
  revalidatePath("/dashboard/token-diskon");
  redirect("/dashboard/token-diskon");
};

export const deleteData = async (id: string) => {
  const data = await getTokenDiscById(id);
  if (!data) return { message: "No data found" };
  try {
    await prisma.tokenDiskon.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/dashboard/token-diskon");
};
