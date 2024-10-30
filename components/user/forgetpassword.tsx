"use client";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/user/button";
import { forgetPass1 } from "@/components/auth/actions";
import { useState } from "react";

export default function ForgetPassword() {
  const [state, formAction] = useFormState(forgetPass1, null);
  const [eye, setEye] = useState(false);
  return (
    <form action={formAction}>
      <div className="mx-4 mt-2 mb-6">
        <div className="text-xl font-bold my-3">Forget Password</div>
        <p className="text-center text-sm text-green-700 mx-6 italic">
          Please input your email ..
        </p>
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
      </div>
      <SubmitButton label="login" />
    </form>
  );
}
