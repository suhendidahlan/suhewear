import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer1 = () => {
  return (
    <div className="bg-slate-800 text-slate-100 p-8">
      <div className="">
        <div className="my-6">
          <h2 className="mb-1">PRODUCTS</h2>
          <ul className="text-xs">Store</ul>
          <ul className="text-xs">Apparel</ul>
          <ul className="text-xs">Custom</ul>
        </div>
        <div className="my-6">
          <h2 className="mb-1">FEATURED</h2>
          <ul className="text-xs">Sporty</ul>
          <ul className="text-xs">Casuals</ul>
          <ul className="text-xs">Accessories</ul>
        </div>
        <div className="my-6">
          <h2 className="mb-1">CUSTOMER SERVICE</h2>
          <ul className="text-xs italic">Jalan Arief Rahman Hakim, Cianjur</ul>
          <ul className="text-xs">+62 859-6238-4140 [WhatsApp]</ul>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div className="m-1">
          <Link href="">
            <GrGooglePlus size={25} />
          </Link>
        </div>
        <div className="m-1">
          <Link href="">
            <FaInstagram size={25} />
          </Link>
        </div>
        <div className="m-1">
          <Link href="">
            <FaWhatsapp size={25} />
          </Link>
        </div>
      </div>
      <div className="mt-2 text-center text-xs">
        © 2024, SUHE Activewear Apparel. All right reserved
      </div>
    </div>
  );
};

export default Footer1;
