"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteData } from "@/components/token-diskon/actions";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-slate-800 text-white w-full font-medium py-2.5 px-6 text-base rounded-md hover:bg-slate-600",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Saving..." : "Save"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="py-3 text-sm bg-gray-50 rounded-bl-md w-full hover:bg-gray-100 text-center"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteData.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="py-3 text-sm bg-gray-50 rounded-br-md w-full hover:bg-gray-100 text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Del"}
    </button>
  );
};
