"use client";
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
