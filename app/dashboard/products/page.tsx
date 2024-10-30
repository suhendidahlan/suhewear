import React from "react";
import Link from "next/link";
import { PiPantsFill } from "react-icons/pi";
import { GiBasketballJersey } from "react-icons/gi";
import { IoShirtSharp, IoBagCheck } from "react-icons/io5";
import { TbJacket } from "react-icons/tb";
import { RiShoppingBag4Line } from "react-icons/ri";

const ProductAdminAll = () => {
  return (
    <div className="mb-10">
      <div className="mx-8 font-bold text-xl underline">PRODUCTS LIST</div>
      <div className="grid grid-cols-4 mx-8">
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/jersey`}
        >
          <GiBasketballJersey size={30} />
          <p>Jersey</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/pants`}
        >
          <PiPantsFill size={30} />
          <p>Pants</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/tshirt`}
        >
          <IoShirtSharp size={30} />
          <p>T-Shirt</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/jacket`}
        >
          <TbJacket size={30} />
          <p>Jacket</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/equipments`}
        >
          <IoBagCheck size={30} />
          <p>Equipments</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/products/accessories`}
        >
          <RiShoppingBag4Line size={30} />
          <p>Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductAdminAll;
