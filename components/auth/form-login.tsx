"use client";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import { signInCredentials } from "@/components/auth/actions";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function FormLogin() {
  const [state, formAction] = useFormState(signInCredentials, null);
  const [eye, setEye] = useState(false);
  return (
    <form action={formAction}>
      <div className="mx-4 mt-2 mb-6">
        <div className="text-xl font-bold my-3">Sign In Form</div>
        <div className="mx-2 my-6">
          <div className="relative mb-3 w-full">
            <input
              type="email"
              name="email"
              className="py-2 px-4 text-sm rounded-md border border-gray-200 w-full"
              placeholder="Email"
            />
          </div>
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.email}</p>
          </div>
        </div>
        <div className="mx-2 my-6">
          <div className="flex justify-between items-center">
            <div className="relative mb-3 w-full">
              <input
                type={eye ? "text" : "password"}
                name="password"
                className="py-2 px-4 text-sm rounded-md border border-gray-200 w-full"
                placeholder="Password"
              />
            </div>
            {eye ? (
              <FiEye
                size={20}
                className="cursor-pointer w-1/6"
                onClick={() => setEye(!eye)}
              />
            ) : (
              <FiEyeOff
                size={20}
                className="cursor-pointer w-1/6"
                onClick={() => setEye(!eye)}
              />
            )}
          </div>
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {state?.error?.password}
            </p>
          </div>
        </div>
        <SubmitButton label="login" />
      </div>
      <div className="text-sm">
        Already haven't an account ?
        <p className="text-sm italic font-medium">
          Klik{" "}
          <Link href={`/register`} className="text-blue-500">
            Register
          </Link>{" "}
          here
        </p>
      </div>
    </form>
  );
}
