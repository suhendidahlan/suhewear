"use client";
import { useFormState } from "react-dom";
import { SubmitButtonEditPass } from "./button";
import { updateDataPass } from "@/components/auth/actions";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import type { User } from "@prisma/client";

export default function FormEditPassword({ data }: { data: User }) {
  const [state, formAction] = useFormState(
    updateDataPass.bind(null, data.id),
    null
  );
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  return (
    <form action={formAction}>
      <div className="mx-4 mt-2 mb-6">
        <div className="text-xl font-bold my-3">Change Password</div>
        <div className="mx-2 my-6">
          <div className="flex justify-between items-center">
            <div className="relative mb-3 w-full">
              <input
                type={eye ? "text" : "password"}
                name="password"
                className="py-2 px-4 text-sm rounded-md border border-gray-200 w-full"
                placeholder="New Password"
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
                placeholder="Confirm New Password"
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
        <SubmitButtonEditPass label="submit" />
      </div>
    </form>
  );
}
