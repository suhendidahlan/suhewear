"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiXSquare } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import React from "react";

const NavbarAdmin1 = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="px-2 py-6 flex justify-end items-center bg-white text-xs md:justify-around w-full md:m-6 z-30 fixed">
        <div className="mx-4 md:hidden" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <Link href="#">
              <FiX size={25} />
            </Link>
          ) : (
            <Link href="#">
              <CiFilter size={25} />
            </Link>
          )}
        </div>
        <p className="pr-4" onClick={() => setNavbar(!navbar)}>
          Filter Dashboard
        </p>
        <div className="hidden md:flex md:justify-around md:text-lg md:m-4">
          <Link href="/shop" className="mx-4 hover:text-slate-400">
            STORE
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            APPAREL
          </Link>
          <Link href={`/dashboard/icons`} className="mx-4 hover:text-slate-400">
            ITEMS HOMEPAGE
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            CATALOG
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            GALLERY/IMAGES
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            LAINNYA
          </Link>
        </div>
      </nav>
      {navbar ? (
        <div className="mt-20 px-8 py-4 bg-white h-screen w-screen duration-200 ease-out z-30 fixed">
          <ul className="my-4 flex justify-between">
            <Link
              href={`/dashboard/products`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              STORE
            </Link>
            <Link href="/shop" className="" onClick={() => setNavbar(!navbar)}>
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/dashboard/custom`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              APPAREL
            </Link>
            <Link href="" className="" onClick={() => setNavbar(!navbar)}>
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/dashboard/icons`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              ITEMS HOMEPAGE
            </Link>
            <Link href="" className="" onClick={() => setNavbar(!navbar)}>
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/dashboard/catalog`}
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
            <Link
              href={`/dashboard/gallery`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              GALLERY/IMAGES
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="" onClick={() => setNavbar(!navbar)}>
              LAINNYA
            </Link>
          </ul>
        </div>
      ) : (
        <div className="mt-20 px-8 py-4 -translate-x-full duration-200 ease-in bg-white h-screen fixed z-30">
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              STORE
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              APPAREL
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              ITEMS HOMEPAGE
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
              GALLERY/IMAGES
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              LAINNYA
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarAdmin1;
