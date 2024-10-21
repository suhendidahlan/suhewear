"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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
  redirect("/login");
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
    await signIn("credentials", { email, password, redirectTo: "/user" });
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
