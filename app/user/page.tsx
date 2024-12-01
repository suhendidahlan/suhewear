import React from "react";
import { auth } from "@/auth";
import { getDataById } from "@/components/user/data";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { rupiah } from "@/components/intl/intl";

const UserDashboard = async () => {
  const session = await auth();
  const id: any = session?.user.id;
  const user = await getDataById(id);

  return (
    <div className="text-center mt-4 mb-10">
      <div className="flex justify-center items-center">
        <div className="text-2xl font-bold my-2 mx-1">ID Acount</div>
        <div className="bg-slate-200 p-1 rounded-md text-xs italic mx-1 text-slate-700">
          user
        </div>
      </div>

      <div className="flex w-full justify-center my-2">
        {user?.image ? (
          <Image
            src={user.image}
            width={100}
            height={100}
            alt="image-user"
            className="rounded-xl"
          />
        ) : (
          <FaRegUserCircle size={40} />
        )}
      </div>
      <div className="flex justify-around items-center">
        <div className="border-r m-2 px-8">
          <p className="text-sm text-slate-600 italic">Poin :</p>
          <p className="text-md font-bold">{user?.poin}</p>
        </div>
        <div className="m-2 px-4">
          <p className="text-sm text-slate-600 italic">Discount :</p>
          <p className="text-2xl font-bold">{user?.diskon} %</p>
        </div>
        <div className="border-l m-2 px-8">
          <p className="text-sm text-slate-600 italic">Credit :</p>
          <p className="text-md font-bold">IDR. {user?.kredit}</p>
        </div>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Name :</p>
        <p className="text-md font-bold">{user?.name}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Email :</p>
        <p className="text-sm font-bold underline">{user?.email}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">No Telp/ WA :</p>
        <p className="text-sm font-bold underline">{user?.telp}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Alamat :</p>
        <p className="text-sm font-bold underline">{user?.alamat}</p>
      </div>

      <div className="my-10">
        <Link
          href={`/user/edit/${user?.id}`}
          className="text-sm bg-slate-300 rounded-md p-2"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
