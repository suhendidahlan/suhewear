import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProdukTerbaruCard from "./product-terbaru-card";

const ProdukTerbaru = async () => {
  return (
    <>
      <div className="px-6 py-2 text-lg font-bold mt-4">
        NEW PRODUCTS ARRIVALS
      </div>
      <ProdukTerbaruCard />
      <div className="mb-3 mt-1 bg-slate-800 text-white text-[13px] px-5 py-2 rounded-md text-center mx-32 tablet:mx-80 laptop:mx-[500px]">
        <Link href={`/shop`}>View All</Link>
      </div>
    </>
  );
};

export default ProdukTerbaru;
