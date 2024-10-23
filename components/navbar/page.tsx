"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import React from "react";
import { logOut } from "./sign-out";
import { chart } from "@prisma/client";

const Navbar = ({
  data,
  products,
  role,
  list,
}: {
  data: any;
  products: chart;
  role: string;
  list: number;
}) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="px-2 py-6 flex justify-between bg-white text-xs md:justify-around w-full md:m-6 z-50 fixed">
        <div className="mx-4 md:hidden" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <Link href="#">
              <FiX size={25} />
            </Link>
          ) : (
            <Link href="#">
              <FiMenu size={25} />
            </Link>
          )}
        </div>
        <div className="hover:opacity-60">
          <Link href="/">
            <Image src="/SUHE APPAREL BK.png" alt="" width={170} height={170} />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-around md:text-lg md:m-4">
          <Link href="/shop" className="mx-4 hover:text-slate-400">
            SHOP
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            CUSTOM
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            GALLERY
          </Link>
          <Link href={`/catalog`} className="mx-4 hover:text-slate-400">
            CATALOG
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            ARTICLE
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            ABOUT US
          </Link>
        </div>
        <div className="flex">
          <Link href="" className="px-4">
            <RiSearch2Line size={30} />
          </Link>
          <Link href={data ? `/products/chart` : `/login`} className="px-4">
            {list > 0 && (
              <p className="bg-red-500 text-center rounded-lg px-1.5 py-0.5 text-white text-[10px] font-medium absolute bottom-5 right-5">
                {list}
              </p>
            )}
            <HiShoppingBag size={30} />
          </Link>
        </div>
      </nav>
      {navbar ? (
        <div className="mt-20 px-8 py-4 bg-white h-dvh w-screen duration-200 ease-out z-40 fixed">
          <div className="">
            {role === "admin" && (
              <ul className="my-4 flex justify-between">
                <Link
                  href="/dashboard"
                  className=""
                  onClick={() => setNavbar(!navbar)}
                >
                  DASHBOARD
                </Link>
                <Link
                  href="/dashboard"
                  className=""
                  onClick={() => setNavbar(!navbar)}
                >
                  <FiArrowRight className="opacity-50" />
                </Link>
              </ul>
            )}
            <ul className="my-4 flex justify-between">
              <Link
                href="/shop"
                className=""
                onClick={() => setNavbar(!navbar)}
              >
                SHOP
              </Link>
              <Link
                href="/shop"
                className=""
                onClick={() => setNavbar(!navbar)}
              >
                <FiArrowRight className="opacity-50" />
              </Link>
            </ul>
            <ul className="my-4 flex justify-between">
              <Link
                href={`/custom`}
                className=""
                onClick={() => setNavbar(!navbar)}
              >
                CUSTOM
              </Link>
              <Link href="" className="" onClick={() => setNavbar(!navbar)}>
                <FiArrowRight className="opacity-50" />
              </Link>
            </ul>
            <ul className="my-4 flex justify-between">
              <Link
                href={`/gallery`}
                className=""
                onClick={() => setNavbar(!navbar)}
              >
                GALLERY
              </Link>
              <Link href="" className="" onClick={() => setNavbar(!navbar)}>
                <FiArrowRight className="opacity-50" />
              </Link>
            </ul>
            <ul className="my-4 flex justify-between">
              <Link
                href={`/catalog`}
                className=""
                onClick={() => setNavbar(!navbar)}
              >
                CATALOG
              </Link>
              <Link href="" className="" onClick={() => setNavbar(!navbar)}>
                <FiArrowRight className="opacity-50" />
              </Link>
            </ul>
            <ul className="my-4 flex justify-between">
              <Link href="" className="" onClick={() => setNavbar(!navbar)}>
                ARTICLE
              </Link>
            </ul>
            <ul className="my-4 flex justify-between">
              <Link href="" className="" onClick={() => setNavbar(!navbar)}>
                ABOUT US
              </Link>
            </ul>
            {data && (
              <div>
                <ul className="my-4 flex justify-between">
                  <Link
                    href={`/products/checkout/transaksi`}
                    className=""
                    onClick={() => setNavbar(!navbar)}
                  >
                    TRANSACTIONS
                  </Link>
                </ul>
                <ul className="my-4 flex justify-between">
                  <Link
                    href={`/user`}
                    className=""
                    onClick={() => setNavbar(!navbar)}
                  >
                    MY ACCOUNT
                  </Link>
                </ul>
              </div>
            )}
          </div>
          {data ? (
            <div className="mt-80 flex justify-between items-center">
              <div className="flex justify-start items-center">
                {data.user.image ? (
                  <Image
                    src={data.user.image}
                    alt="user image"
                    width={50}
                    height={50}
                    className="rounded-2xl"
                  />
                ) : (
                  <FaRegUserCircle size={30} className="mx-4" />
                )}
                <Link href="" className="p-2 italic text-sm font-medium">
                  {data.user.name}
                </Link>
              </div>
              <div
                className="ml-1 text-sm font-bold bg-slate-100 p-1 text-center rounded-lg cursor-pointer"
                onClick={() => {
                  logOut();
                  setNavbar(!navbar);
                }}
              >
                Log Out
              </div>
            </div>
          ) : (
            <div className="mt-96 flex justify-between items-center">
              <div className="flex justify-start items-center">
                <FaRegUserCircle size={30} className="mx-4" />
                <Link
                  href="/login"
                  className="p-2 italic text-sm font-medium"
                  onClick={() => setNavbar(!navbar)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-20 px-8 py-4 -translate-x-full duration-200 ease-in bg-white h-screen fixed z-40">
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              SHOP
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              CUSTOM
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              GALLERY
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              CATALOG
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              ARTICLE
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              ABOUT US
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          {data && (
            <div>
              <ul className="my-4 flex justify-between">
                <Link href="" className="">
                  TRANSACTIONS
                </Link>
                <FiArrowRight className="opacity-50" />
              </ul>
              <ul className="my-4 flex justify-between">
                <Link href="" className="">
                  MY ACCOUNT
                </Link>
                <FiArrowRight className="opacity-50" />
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
