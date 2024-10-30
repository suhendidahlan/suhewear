import React from "react";
import { auth } from "@/auth";
import { getDataById } from "@/components/user/data";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const UserDashboard = async () => {
  const session = await auth();
  const id: any = session?.user.id;
  const user = await getDataById(id);

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
