"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import nodemailer from "nodemailer";
import { getDataByEmail } from "../user/data";
import { getDataById } from "@/components/user/data";

//SCHEMA

const RegisterSchema = z
  .object({
    name: z.string().min(1, "Name must be more than 1 characters"),
    email: z.string().email("Invalid Email !"),
    password: z
      .string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must less than 32 characters"),
    confirmpassword: z
      .string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must less than 32 characters"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Password doesn't match",
    path: ["confirmpassword"],
  });

const SignInSchema = z.object({
  email: z.string().email("Invalid Email !"),
  password: z
    .string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must less than 32 characters"),
});

const ForgetPassSchema = z.object({
  email: z.string().email("Invalid Email !"),
});

const EditPassSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must less than 32 characters"),
  confirmpassword: z
    .string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must less than 32 characters"),
});

//REGISTER

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { message: "Failed to register data" };
  }

  const dataUser = await getDataByEmail(email);
  const pesan: string =
    "silahkan klik link berikut ini, untuk melanjutkan proses verifikasi akun anda:" +
    process.env.SUHE_APPAREL_URL +
    "/user/verification/" +
    dataUser?.id;

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
      to: email,
      // envelope: {
      //   from: "Daemon <apparel@suheapp.com>", // used as MAIL FROM: address for SMTP
      //   to: email, // used as RCPT TO: address for SMTP
      // },
      subject: "SUHE Apparel Verification Account",
      text: "suhendi dahlan apparel",
      html: pesan,
    });
  } catch (error) {
    return { message: "Failed to register data" };
  }

  redirect("/user/emailing");
};

//FORGET PASSWORD

export const forgetPass1 = async (prevState: unknown, formData: FormData) => {
  const validatedFields = ForgetPassSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  const dataUser = await getDataByEmail(email);
  const pesan: string =
    "silahkan klik link berikut ini, untuk melanjutkan proses ganti password akun anda:" +
    process.env.SUHE_APPAREL_URL +
    "/user/lupa-password/" +
    dataUser?.id;

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
      to: email,
      // envelope: {
      //   from: "Daemon <apparel@suheapp.com>", // used as MAIL FROM: address for SMTP
      //   to: email, // used as RCPT TO: address for SMTP
      // },
      subject: "SUHE Apparel Verification Account",
      text: "suhendi dahlan apparel",
      html: pesan,
    });
  } catch (error) {
    return { message: "Failed to register data" };
  }

  redirect("/user/lupa-password/emailing");
};

//EDIT PASSWORD

export const updateDataPass = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditPassSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getDataById(id);
  if (!data) return { message: "No Data Found" };

  const { password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update data" };
  }

  revalidatePath("/user/lupa-password/login");
  redirect("/user/lupa-password/login");
};

//SIGN IN

export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials" };
        default:
          return { message: "something went wrong" };
      }
    }
    throw error;
  }
};
