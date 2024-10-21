"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const FilterCatalog1 = () => {
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
          Filter Catalog
        </p>
        <div className="hidden md:flex md:justify-around md:text-lg md:m-4">
          <Link href={`/catalog/soccer`} className="mx-4 hover:text-slate-400">
            SOCCER / FUTSAL
          </Link>
          <Link
            href={`/catalog/basketball`}
            className="mx-4 hover:text-slate-400"
          >
            BASKETBALL
          </Link>
          <Link
            href={`/catalog/badminton`}
            className="mx-4 hover:text-slate-400"
          >
            BADMINTON
          </Link>
          <Link
            href={`/catalog/volleyball`}
            className="mx-4 hover:text-slate-400"
          >
            VOLLEYBALL
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            RUNNING
          </Link>
          <Link href="" className="mx-4 hover:text-slate-400">
            LAINNYA
          </Link>
        </div>
      </nav>
      {navbar ? (
        <div className="px-8 py-4 bg-white h-screen w-screen duration-200 ease-out absolute">
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/soccer`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              SOCCER / FUTSAL
            </Link>
            <Link
              href={`/catalog/soccer`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/basketball`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              BASKETBALL
            </Link>
            <Link
              href={`/catalog/basketball`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/badminton`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              BADMINTON
            </Link>
            <Link
              href={`/catalog/badminton`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/volleyball`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              VOLLEYBALL
            </Link>
            <Link
              href={`/catalog/volleyball`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/running`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              RUNNING
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/catalog/others`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              LAINNYA
            </Link>
          </ul>
        </div>
      ) : (
        <div className="px-8 py-4 -translate-x-full duration-200 ease-in bg-white h-screen absolute">
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              SOCCER / FUTSAL
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              BASKETBALL
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              BADMINTON
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              VOLLEYBALL
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              RUNNING
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

export default FilterCatalog1;
