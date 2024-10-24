"use client";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import { signUpCredentials } from "@/components/auth/actions";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function FormRegister() {
  const [state, formAction] = useFormState(signUpCredentials, null);
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  useEffect(() => {
    const init = async () => {
      const { Input, initTWE } = await import("tw-elements");
      initTWE({ Input });
    };
    init();
  }, []);
  return (
    <form action={formAction}>
      <div className="mx-4 mt-2 mb-6">
        <div className="text-xl font-bold my-3">Sign Up Form</div>
        <div className="mx-2 my-6">
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              name="name"
              className="peer block min-h-[auto] w-full rounded border border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputEmail"
              placeholder="Example label"
            />
            <label
              htmlFor="exampleFormControlInputEmail"
              className="pointer-events-none absolute text-sm left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Nama / Username
            </label>
          </div>
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>
        <div className="mx-2 my-6">
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="email"
              name="email"
              className="peer block min-h-[auto] w-full rounded border border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputEmail"
              placeholder="Example label"
            />
            <label
              htmlFor="exampleFormControlInputEmail"
              className="pointer-events-none absolute text-sm left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Email
            </label>
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
        <div className="mx-2 my-6">
          <div className="flex justify-between items-center">
            <div className="relative mb-3 w-full">
              <input
                type={eye2 ? "text" : "password"}
                name="confirmpassword"
                className="py-2 px-4 text-sm rounded-md border border-gray-200 w-full"
                placeholder="Confirm Password"
              />
            </div>
            {eye2 ? (
              <FiEye
                size={20}
                className="cursor-pointer w-1/6"
                onClick={() => setEye2(!eye2)}
              />
            ) : (
              <FiEyeOff
                size={20}
                className="cursor-pointer w-1/6"
                onClick={() => setEye2(!eye2)}
              />
            )}
          </div>
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {state?.error?.confirmpassword}
            </p>
          </div>
        </div>
        <SubmitButton label="register" />
      </div>
      <div className="text-sm">
        Already have an account ?
        <p className="text-sm italic font-medium">
          Klik{" "}
          <Link href={`/login`} className="text-blue-500">
            Login
          </Link>{" "}
          here
        </p>
      </div>
    </form>
  );
}
