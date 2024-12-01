import type { User } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { DeleteButton } from "@/components/token-diskon/button";
import { getDataUsers } from "@/components/user/data";
import Image from "next/image";

const ListUserPage = async () => {
  const users = await getDataUsers();
  return (
    <div className="mb-20">
      <div className="flex justify-between mx-2 items-center">
        <div className="text-2xl font-bold border-b mb-4 mx-6 italic">
          # List SUHE Users
        </div>
        <div className="text-sm bg-slate-700 text-white p-1 rounded-md">
          <Link href={`/dashboard/user/no-active-user`}>Inactive Users</Link>
        </div>
      </div>
      <div className="flex justify-around items-center text-sm font-bold border-b m-2">
        <p className="">No</p>
        <p className="">Image</p>
        <p className="">Email</p>
      </div>
      {users.map((data: User, no: any) => (
        <div
          className="flex justify-around items-center text-sm border-b m-2"
          key={data.id}
        >
          <p className="">{no + 1}</p>
          <div className="laptop:rounded-full rounded-full laptop:w-[50px] laptop:h-[50px] w-[50px] h-[50px] laptop:overflow-hidden overflow-hidden">
            <Image
              src={data.image}
              alt="profile"
              width={50}
              height={50}
              className="w-[50px]"
            />
          </div>
          <Link href={`/dashboard/user/${data.id}`}>{data.email}</Link>
        </div>
      ))}
    </div>
  );
};

export default ListUserPage;
