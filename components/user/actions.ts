"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDataById } from "@/components/user/data";
import { del, put } from "@vercel/blob";

//SCHEMA

const EditSchema = z.object({
  role: z.string().min(1),
});

const EditUserSchema = z.object({
  name: z.string().min(1, "Name must be more than 1 characters"),
  image: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 2000000, {
      message: "image must less than 2MB",
    }),
  telp: z.any(),
  alamat: z.any(),
});

const EditUserAdminSchema = z.object({
  name: z.string().min(1, "Name must be more than 1 characters"),
  image: z
    .any()
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "only images are allowed",
    })
    .refine((file) => file.size < 2000000, {
      message: "image must less than 2MB",
    }),
  telp: z.any(),
  alamat: z.any(),
  role: z.any(),
  diskon: z.coerce.number(),
  kredit: z.coerce.number(),
  poin: z.coerce.number(),
});

//EDIT
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

  const { role } = validatedFields.data;

  try {
    if (data.email !== "suhendidahlan1997@gmail.com") {
      await prisma.user.update({
        data: {
          role,
          isActive: true,
        },
        where: { id },
      });
    } else {
      await prisma.user.update({
        data: {
          role: "admin",
          isActive: true,
        },
        where: { id },
      });
    }
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath("/user/login");
  redirect("/user/login");
};

//EDIT DATA USER
export const updateDataUser = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditUserSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getDataById(id);
  if (!data) return { message: "No Data Found" };

  const { name, image, telp, alamat } = validatedFields.data;

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
    await prisma.user.update({
      data: {
        name,
        image: imagePath,
        telp,
        alamat,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath("/user");
  redirect("/user");
};

export const updateDataUserAdmin = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditUserAdminSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getDataById(id);
  if (!data) return { message: "No Data Found" };

  const { name, image, telp, alamat, role, diskon, kredit, poin } =
    validatedFields.data;

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
    await prisma.user.update({
      data: {
        name,
        image: imagePath,
        telp,
        alamat,
        role,
        diskon,
        kredit,
        poin,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }
  revalidatePath(`/dashboard/user/${id}`);
  redirect(`/dashboard/user/${id}`);
};

export const deleteData = async (id: string) => {
  const data = await getDataById(id);
  if (!data) return { message: "No data found" };
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }
  revalidatePath("/dashboard/user/no-active-user");
};
