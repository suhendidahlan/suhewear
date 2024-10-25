import Image from "next/image";
import Link from "next/link";
import { getImagesByCat } from "@/components/custom/kerah/data";
import { FiArrowLeft } from "react-icons/fi";

export default async function SoccerKerahPage() {
  const data = await getImagesByCat("basketball");
  return (
    <div className="mb-10">
      <div className="px-8 py-3 text-slate-800 italic font-bold text-xl">
        Jenis Kerah Soccer Jersey by SUHE
      </div>
      <div className="flex justify-around items-center">
        <div className="m-2 grid grid-cols-2 max-w-screen">
          {data?.map((img) => (
            <div key={img.id} className="bg-slate-100 m-1 text-center">
              <Link href={img.image}>
                <Image
                  src={img.image}
                  alt=""
                  width={170}
                  height={100}
                  className="rounded-md"
                />
              </Link>
              <div className="p-2 text-[14px] font-medium">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-1 px-2 text-[13px] font-medium flex justify-center items-center italic mt-6">
        <Link href={`/custom/basketball`}>
          <FiArrowLeft />
        </Link>
        <Link href={`/custom/basketball`} className="mx-5">
          Kembali
        </Link>
      </div>
    </div>
  );
}
