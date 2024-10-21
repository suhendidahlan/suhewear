import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const CustomJersey = async () => {
  return (
    <>
      <div className="px-4 py-2 text-lg text-center font-bold mt-4">
        CUSTOM JERSEY by SUHE
      </div>
      <div className="m-0.5 text-center rounded-md">
        <div className="p-2 flex justify-center">
          <Link href={`/custom`}>
            <Image
              className="rounded-md"
              src={`/header4.jpg`}
              alt=""
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="text-center font-normal text-[12px] italic py-2 mx-8">
          Kreasikan Jersey-mu dengan design dan material terbaik dari SUHE
          Apparel
        </div>
      </div>
      <div className="mb-3 mt-1 bg-slate-800 text-white text-[13px] px-5 py-2 rounded-md text-center mx-32">
        <Link href={`/custom`}>Click Details</Link>
      </div>
    </>
  );
};

export default CustomJersey;
