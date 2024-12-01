"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import { deleteData } from "@/components/user/actions";

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
      {label === "login" ? (
        <div className="">{pending ? "Verifying..." : "Next"}</div>
      ) : (
        <div className="">{pending ? "Verifying..." : "Verif Now"}</div>
      )}
    </button>
  );
};

export const SubmitButtonEditPass = ({ label }: { label: string }) => {
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
        <div className="">{pending ? "Verifying..." : "Submit"}</div>
      ) : (
        <div className="">{pending ? "Verifying..." : "Login"}</div>
      )}
    </button>
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
