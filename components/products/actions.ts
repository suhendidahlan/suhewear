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
  image1: z
    .any()
    .refine((file) => file.size > 0, { message: "Image is required!" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    }),
  image2: z
    .any()
    .refine((file) => file.size > 0, { message: "Image is required!" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    }),
  image3: z
    .any()
    .refine((file) => file.size > 0, { message: "Image is required!" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    }),
  jenis: z.string().min(1),
  kategori: z.string().min(1),
  berat: z.coerce.number(),
  size_xs: z.coerce.number(),
  size_s: z.coerce.number(),
  size_m: z.coerce.number(),
  size_l: z.coerce.number(),
  size_xl: z.coerce.number(),
  size_xxl: z.coerce.number(),
  size_xxxl: z.coerce.number(),
  harga: z.coerce.number(),
  deskripsi: z.string().min(1),
});

const EditSchema = z.object({
  title: z.string().min(1),
  image1: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    })
    .optional(),
  image2: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    })
    .optional(),
  image3: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "image must less than 4MB",
    })
    .optional(),
  jenis: z.string().min(1),
  kategori: z.string().min(1),
  sub1: z.string().min(1),
  sub2: z.string().min(1),
  sub3: z.string().min(1),
  berat: z.coerce.number(),
  size_xs: z.coerce.number(),
  size_s: z.coerce.number(),
  size_m: z.coerce.number(),
  size_l: z.coerce.number(),
  size_xl: z.coerce.number(),
  size_xxl: z.coerce.number(),
  size_xxxl: z.coerce.number(),
  harga: z.coerce.number(),
  harga_disc: z.coerce.number(),
  deskripsi: z.string().min(1),
  status: z.string().min(1),
  disc_label: z.string().min(1),
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
    title,
    image1,
    image2,
    image3,
    jenis,
    kategori,
    berat,
    size_xs,
    size_s,
    size_m,
    size_l,
    size_xl,
    size_xxl,
    size_xxxl,
    harga,
    deskripsi,
  } = validatedFields.data;

  let imagePath1;
  if (image1) {
    const { url } = await put(image1.name, image1, {
      access: "public",
      multipart: true,
    });
    imagePath1 = url;
  } else {
    imagePath1 = "";
  }

  let imagePath2;
  if (image2) {
    const { url } = await put(image2.name, image2, {
      access: "public",
      multipart: true,
    });
    imagePath2 = url;
  } else {
    imagePath2 = "";
  }

  let imagePath3;
  if (image3) {
    const { url } = await put(image3.name, image3, {
      access: "public",
      multipart: true,
    });
    imagePath3 = url;
  } else {
    imagePath3 = "";
  }

  try {
    await prisma.produk.create({
      data: {
        title,
        image1: imagePath1,
        image2: imagePath2,
        image3: imagePath3,
        jenis,
        kategori,
        berat,
        size_xs,
        size_s,
        size_m,
        size_l,
        size_xl,
        size_xxl,
        size_xxxl,
        harga,
        deskripsi,
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
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
    title,
    image1,
    image2,
    image3,
    jenis,
    kategori,
    sub1,
    sub2,
    sub3,
    berat,
    size_xs,
    size_s,
    size_m,
    size_l,
    size_xl,
    size_xxl,
    size_xxxl,
    harga,
    harga_disc,
    deskripsi,
    status,
    disc_label,
  } = validatedFields.data;

  let imagePath1;
  if (!image1 || image1.size <= 0) {
    imagePath1 = data.image1;
  } else {
    await del(data.image1);
    const { url } = await put(image1.name, image1, {
      access: "public",
      multipart: true,
    });
    imagePath1 = url;
  }

  let imagePath2;
  if (!image2 || image2.size <= 0) {
    imagePath2 = data.image2;
  } else {
    await del(data.image2);
    const { url } = await put(image2.name, image2, {
      access: "public",
      multipart: true,
    });
    imagePath2 = url;
  }

  let imagePath3;
  if (!image3 || image3.size <= 0) {
    imagePath3 = data.image3;
  } else {
    await del(data.image3);
    const { url } = await put(image3.name, image3, {
      access: "public",
      multipart: true,
    });
    imagePath3 = url;
  }

  try {
    await prisma.produk.update({
      data: {
        title,
        image1: imagePath1,
        image2: imagePath2,
        image3: imagePath3,
        jenis,
        kategori,
        sub1,
        sub2,
        sub3,
        berat,
        size_xs,
        size_s,
        size_m,
        size_l,
        size_xl,
        size_xxl,
        size_xxxl,
        harga,
        harga_disc,
        deskripsi,
        status,
        disc_label,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//DELETE

//Delete Image

export const deleteData = async (id: string) => {
  const data = await getImageById(id);
  if (!data) return { message: "No data found" };
  await del(data.image1);
  await del(data.image2);
  await del(data.image3);
  try {
    await prisma.produk.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/dashboard/products");
};
