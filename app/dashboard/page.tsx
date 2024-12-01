import React from "react";
import { auth } from "@/auth";
import { FaRegUser } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { getDataUsers } from "@/components/user/data";
import { getDataProducts } from "@/components/products/data";
import Link from "next/link";

const Dashboard = async () => {
  const session = await auth();
  const users = await getDataUsers();
  const jml_users: number = users.length;
  const products = await getDataProducts();
  const jml_products = products.length;
  return (
    <>
      <div className="text-center p-2 font-bold italic">
        WELCOME Admin, {session?.user?.name}
      </div>
      <div className="grid grid-cols-4 mx-4">
        <div className="bg-slate-200 p-2 m-2 text-center items-center rounded-md">
          <div className="flex">
            <Link href={`/dashboard/user`}>
              <FaRegUser size={35} />
            </Link>
            <p className="font-bold text-xl">{jml_users}</p>
          </div>
        </div>
        <div className="bg-slate-200 p-2 m-2 text-center items-center rounded-md">
          <div className="flex">
            <Link href={`/dashboard`}>
              <TbShoppingBagPlus size={35} />
            </Link>
            <p className="font-bold text-xl">{jml_products}</p>
          </div>
        </div>
        <div className="bg-slate-200 p-2 m-2 text-center items-center rounded-md">
          <div className="flex">
            <Link href={`/dashboard/token-diskon`}>
              <MdOutlineGeneratingTokens size={35} />
            </Link>
            <p className="font-bold text-xl">{jml_products}</p>
          </div>
        </div>
        <div className="bg-slate-200 p-2 m-2 text-center items-center rounded-md">
          <div className="flex">
            <Link href={`/dashboard/token-diskon`}>
              <RiQuestionnaireFill size={35} />
            </Link>
            <p className="font-bold text-xl">{jml_products}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
