"use client";
import React from "react";
import { cekDiskon } from "@/components/checkout/actions";
import { useFormState } from "react-dom";

export default function GosokKupon({ user_id }: { user_id: string }) {
  const [stateDiskon, formActionDiskon] = useFormState(
    cekDiskon.bind(null, user_id),
    null
  );
  return (
    <div className="mx-10 my-3">
      <div className="text-sm mx-2 my-1 font-bold italic">
        # Kupon Discount :
      </div>
      <form action={formActionDiskon}>
        <div className="flex">
          <input
            type="text"
            name="token"
            className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
            placeholder="Masukan Kupon Jika Punya..."
          />
          <button
            className="bg-slate-500 rounded-lg p-2 mx-2 text-white text-sm"
            type="submit"
          >
            Claim
          </button>
        </div>
      </form>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-slate-700 mt-2 italic">
          {stateDiskon?.message}
        </p>
      </div>
    </div>
  );
}
