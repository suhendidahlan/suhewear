"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slide2 = () => {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 <= 0 ? 4 : prev - 1));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 >= 0 ? 5 : prev + 1));
  };

  return (
    <div className="">
      <div className="ease-out transation-all duration-100 delay-100">
        <Image
          src={`/header${page}.jpg`}
          alt="image"
          width={1440}
          height={1440}
          className="w-screen"
        />
      </div>
      <div
        className="z-100 absolute left-4 text-md -translate-y-32 bg-slate-700 opacity-60 p-1 rounded-md tablet:-translate-y-60 laptop:-translate-y-80"
        onClick={handlePrevPage}
      >
        <span className="text-white inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-500">
          &lt;-
        </span>
      </div>
      <div
        className="z-100 absolute right-4 text-md -translate-y-32 bg-slate-700 opacity-60 p-1 rounded-md tablet:-translate-y-60 laptop:-translate-y-80"
        onClick={handleNextPage}
      >
        <span className="text-white inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-500">
          -&gt;
        </span>
      </div>
    </div>
  );
};

export default Slide2;
