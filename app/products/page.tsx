import React from "react";
import Image from "next/image";
import Link from "next/link";

const DetailProduct = () => {
  return (
    <>
      <div className="flex justify-center p-2">
        <Image src="/product1-jersey.png" alt="" width={330} height={330} />
      </div>
      <form action="">
        <div className="px-4 py-2 text-xl font-bold">
          Suhe Sporty Jersey Blue Medium Series Jersey
        </div>
        <input
          type="hidden"
          defaultValue="Suhe Sporty Jersey Blue Medium Series Jersey"
        />
        <div className="px-4 text-slate-500 font-bold">Rp. 150.000, 00</div>
        <div className="px-4 text-sm text-slate-500 italic">Tax include</div>
        <div className="flex justify-center">
          <button className="mb-3 mt-1 bg-slate-800 text-white text-[13px] px-5 py-2 rounded-md text-center w-3/4">
            <Link href="">Add to Chart</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default DetailProduct;
