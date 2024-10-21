import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid Email !"),
  password: z
    .string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must less than 32 characters"),
});
