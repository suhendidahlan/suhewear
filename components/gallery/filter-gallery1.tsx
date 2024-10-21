"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const FilterGallery1 = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="px-2 py-6 flex justify-end items-center bg-white text-xs md:justify-around w-full md:m-6">
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
          Filter Gallery
        </p>
        <div className="hidden md:flex md:justify-around md:text-lg md:m-4">
          <Link href={`/gallery/sporty`} className="mx-4 hover:text-slate-400">
            SPORTY
          </Link>
          <Link href={`/gallery/casual`} className="mx-4 hover:text-slate-400">
            CASUAL
          </Link>
          <Link href={`/gallery/team`} className="mx-4 hover:text-slate-400">
            TEAM
          </Link>
          <Link href={`/gallery/others`} className="mx-4 hover:text-slate-400">
            OTHERS
          </Link>
        </div>
      </nav>
      {navbar ? (
        <div className="px-8 py-4 bg-white h-screen w-screen duration-200 ease-out absolute">
          <ul className="my-4 flex justify-between">
            <Link
              href={`/gallery/sporty`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              SPORTY
            </Link>
            <Link
              href={`/gallery/sporty`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/gallery/casual`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              CASUAL
            </Link>
            <Link
              href={`/gallery/casual`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/gallery/team`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              TEAM
            </Link>
            <Link
              href={`/gallery/team`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/gallery/others`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              OTHERS
            </Link>
            <Link
              href={`/gallery/others`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
        </div>
      ) : (
        <div className="px-8 py-4 -translate-x-full duration-200 ease-in bg-white h-screen absolute">
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              SPORTY
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              CASUAL
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              TEAM
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              OTHERS
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
        </div>
      )}
    </>
  );
};

export default FilterGallery1;
