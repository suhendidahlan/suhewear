"use client";
import React from "react";
import { deleteData } from "@/components/chart/actions";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-slate-800 text-white font-medium py-2.5 px-12 text-base rounded-md hover:bg-slate-600",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "submit" ? (
        <div className="">{pending ? "Processing..." : "Next"}</div>
      ) : (
        <div className="">{pending ? "Submiting..." : "Next"}</div>
      )}
    </button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteDataWithId = deleteData.bind(null, id);
  return (
    <form action={deleteDataWithId}>
      <button type="submit">
        <RiDeleteBack2Fill size={20} />
      </button>
    </form>
  );
};
