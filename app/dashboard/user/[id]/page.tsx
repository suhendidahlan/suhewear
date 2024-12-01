import React from "react";
import { auth } from "@/auth";
import { getDataById } from "@/components/user/data";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const UserDashboard = async ({ params }: { params: { id: string } }) => {
  const user = await getDataById(params.id);

  return (
    <div className="text-center mt-4 mb-10">
      <div className="text-2xl font-bold my-2">ID Acount</div>
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
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Role :</p>
        <p className="text-sm font-bold underline">{user?.role}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Diskon :</p>
        <p className="text-sm font-bold underline">{user?.diskon}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Kredit :</p>
        <p className="text-sm font-bold underline">{user?.kredit}</p>
      </div>
      <div className="m-1">
        <p className="text-sm italic text-slate-600">Poin :</p>
        <p className="text-sm font-bold underline">{user?.poin}</p>
      </div>
      <div className="my-10">
        <Link
          href={`/dashboard/user/edit/${user?.id}`}
          className="text-sm bg-slate-300 rounded-md p-2"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
