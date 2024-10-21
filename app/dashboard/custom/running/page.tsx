import Image from "next/image";
import Link from "next/link";

import { FiArrowLeft } from "react-icons/fi";

export default function CustomAdmin() {
  return (
    <div className="mb-10">
      <div className="px-8 py-3 text-slate-800 italic font-bold text-xl">
        SUHE Apparel Admin
      </div>
      <div className="flex justify-around items-center">
        <div className="m-2 grid grid-cols-4 max-w-screen">
          <div className="bg-slate-100 m-1 text-center">
            <Link href={`/dashboard/custom/running/pola`}>
              <Image
                src="/Sport activewear.jpg"
                alt=""
                width={170}
                height={100}
                className="rounded-md"
              />
            </Link>
            <div className="p-2 text-[14px] font-medium">Pola</div>
          </div>
          <div className="bg-slate-100 m-1 text-center">
            <Link href={`/dashboard/custom/running/kerah`}>
              <Image
                src="/Sport activewear.jpg"
                alt=""
                width={170}
                height={100}
                className="rounded-md"
              />
            </Link>
            <div className="p-2 text-[14px] font-medium">Kerah</div>
          </div>
          <div className="bg-slate-100 m-1 text-center">
            <Link href="">
              <Image
                src="/Sport activewear.jpg"
                alt=""
                width={170}
                height={100}
                className="rounded-md"
              />
            </Link>
            <div className="p-2 text-[14px] font-medium">Harga</div>
          </div>
          <div className="bg-slate-100 m-1 text-center">
            <Link href="">
              <Image
                src="/Sport activewear.jpg"
                alt=""
                width={170}
                height={100}
                className="rounded-md"
              />
            </Link>
            <div className="p-2 text-[14px] font-medium">Size</div>
          </div>
        </div>
      </div>
    </div>
  );
}
