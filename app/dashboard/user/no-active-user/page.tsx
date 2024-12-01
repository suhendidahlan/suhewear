import type { User } from "@prisma/client";
import React from "react";
import { DeleteButton } from "@/components/user/button";
import { getDataUsersFalse } from "@/components/user/data";

const ListUserPageInactive = async () => {
  const users = await getDataUsersFalse();
  return (
    <div className="mb-20">
      <div className="flex justify-between mx-2 items-center">
        <div className="text-2xl font-bold border-b mb-4 mx-6 italic">
          # List USERS INACTIVE
        </div>
      </div>
      <div className="flex justify-around items-center text-sm font-bold border-b m-2">
        <p className="">No</p>
        <p className="">Email</p>
        <p className="">Del</p>
      </div>
      {users.map((data: User, no: any) => (
        <div
          className="flex justify-around items-center text-sm border-b m-2"
          key={data.id}
        >
          <p className="">{no + 1}</p>
          <p className="text-red-500">{data.email}</p>
          <div className="">
            <DeleteButton id={data.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUserPageInactive;
