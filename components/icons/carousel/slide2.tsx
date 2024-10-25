"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slide2 = () => {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 4 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="ease-out transation-all duration-100 delay-100">
      <Image
        src={`/header${page}.jpg`}
        alt="image"
        width={300}
        height={300}
        className="w-screen"
      />
    </div>
  );
};

export default Slide2;
