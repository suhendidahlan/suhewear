"use client";
import { User } from "@prisma/client";
import type React from "react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { useFormState } from "react-dom";
import { updateDataUser } from "@/components/user/actions";
import { SubmitButtonEditPass } from "./button";

const EditUserAccount = ({ data }: { data: User }) => {
  const [state, formAction] = useFormState(
    updateDataUser.bind(null, data.id),
    null
  );
  return (
    <div className="">
      <form action={formAction}>
        <p className="text-sm italic text-slate-600">Image :</p>
        <div className="flex w-full justify-center my-2">
          {data?.image ? (
            <Image
              src={data.image}
              width={100}
              height={100}
              alt="image-user"
              className="rounded-md"
            />
          ) : (
            <FaRegUserCircle size={40} />
          )}
        </div>
        <input type="file" name="image" className="text-sm my-2" />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
        <div className="m-2">
          <p className="text-sm italic text-slate-600">Name :</p>
          <input
            type="text"
            name="name"
            defaultValue={data.name}
            className="text-center p-2 bg-slate-100 rounded-md text-sm"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>
        <div className="m-2">
          <p className="text-sm italic text-slate-600">No Telp / Whatsapp :</p>
          <input
            type="text"
            name="telp"
            defaultValue={data.telp ? data.telp : ""}
            className="text-center p-2 bg-slate-100 rounded-md text-sm"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.telp}</p>
          </div>
        </div>
        <div className="m-2">
          <p className="text-sm italic text-slate-600">Alamat :</p>
          <input
            type="text"
            name="alamat"
            defaultValue={data.alamat ? data.alamat : ""}
            className="text-center p-2 bg-slate-100 rounded-md text-sm"
          />
        </div>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.alamat}</p>
        </div>
        <div className="my-4">
          <SubmitButtonEditPass label="submit" />
        </div>
      </form>
    </div>
  );
};

export default EditUserAccount;
