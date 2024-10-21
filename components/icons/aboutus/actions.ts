"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDataById } from "./data";

//SCHEMA

const UploadSchema = z.object({
  title: z.string().min(1),
  isi: z.string().min(1),
});

const EditSchema = z.object({
  title: z.string().min(1),
  isi: z.string().min(1),
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

  const { title, isi } = validatedFields.data;

  try {
    await prisma.aboutus.create({
      data: {
        title,
        isi,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }
  revalidatePath("/");
  redirect("/");
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

  const data = await getDataById(id);
  if (!data) return { message: "No Data Found" };

  const { title, isi } = validatedFields.data;

  try {
    await prisma.aboutus.update({
      data: {
        title,
        isi,
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
  try {
    await prisma.aboutus.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/");
};
