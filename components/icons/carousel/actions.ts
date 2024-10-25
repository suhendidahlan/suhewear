"use server";
import { z } from "zod";
import { del, put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getImageById } from "./data";

//SCHEMA

const UploadSchemaCarousel = z.object({
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
});

const EditSchemaCarousel = z.object({
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
});

//STORE

export const storeCarousel = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadSchemaCarousel.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, image } = validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.carousel.create({
      data: {
        title,
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

export const updateCarousel = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditSchemaCarousel.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImageById(id);
  if (!data) return { message: "No Data Found" };

  const { title, image } = validatedFields.data;
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
    await prisma.carousel.update({
      data: {
        title,
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

export const deleteCarousel = async (id: string) => {
  const data = await getImageById(id);
  if (!data) return { message: "No data found" };
  await del(data.image);
  try {
    await prisma.carousel.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/");
};
