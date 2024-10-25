"use server";
import { z } from "zod";
import { del, put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getImageById } from "./data";

//SCHEMA

const UploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .any()
    .refine((file) => file.size > 0, { message: "Image is required!" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    }),
  ket: z.string().min(1),
  cabor: z.string().min(1),
  kategori: z.string().min(1),
});

const EditSchema = z.object({
  title: z.string().min(1),
  image: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    })
    .optional(),
  ket: z.string().min(1),
  cabor: z.string().min(1),
  kategori: z.string().min(1),
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

  const { title, image, ket, cabor, kategori } = validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.kerah.create({
      data: {
        title,
        ket,
        cabor,
        kategori,
        image: url,
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

  const data = await getImageById(id);
  if (!data) return { message: "No Data Found" };

  const { title, image, ket, cabor, kategori } = validatedFields.data;
  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  try {
    await prisma.kerah.update({
      data: {
        title,
        ket,
        cabor,
        kategori,
        image: imagePath,
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
  await del(data.image);
  try {
    await prisma.kerah.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/");
};
