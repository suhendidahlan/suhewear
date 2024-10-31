import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FilterCustom from "@/components/custom/filter-custom";

export default function CustomPage() {
  return (
    <div className="mb-10">
      <div className="px-5 py-3 text-slate-800 italic font-bold text-xl">
        Custom Jersey by SUHE
      </div>
      <FilterCustom />
      <div className="flex justify-center items-center">
        <div className="mx-2 grid grid-cols-2 tablet:grid-cols-3">
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/custom/soccer`}>
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/custom/soccer`}>Soccer</Link>
              <Link href={`/custom/soccer`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/custom/basketball`}>
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/custom/basketball`}>Basketball</Link>
              <Link href={`/custom/basketball`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/custom/badminton`}>
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/custom/badminton`}>Badminton</Link>
              <Link href={`/custom/badminton`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/custom/volleyball`}>
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/custom/volleyball`}>Volleyball</Link>
              <Link href={`/custom/volleyball`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/custom/running`}>
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/custom/running`}>Running</Link>
              <Link href={`/custom/running`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href="">
                <Image
                  className="rounded-md tablet:w-[300px]"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href="">Lainnya</Link>
              <Link href="">
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-2xl text-center">
          Jenis Jersey ?
        </div>
        <p className="px-3 text-center text-[14px] text-slate-600">
          SUHE Apparel menyediakan jasa custom jersey berdasarkan jenisnya mulai
          dari cabang olahraga, jenis pola, dan jenis bahan/material yang
          dipakai.
        </p>
        <div className="py-1 px-2 text-[16px] font-light flex justify-center items-center italic">
          <Link href="" className="mx-5">
            Klik Selengkapnya
          </Link>
          <Link href="">
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-2xl text-center">
          Bahan / Materials ?
        </div>
        <p className="px-3 text-center text-[14px] text-slate-600">
          Berbagai jenis bahan/material tersedia baik yang berkualitas standar
          maupun premium dengan pola rajut yang bervariasi.
        </p>
        <div className="py-1 px-2 text-[16px] font-light flex justify-center items-center italic">
          <Link href="" className="mx-5">
            Klik Selengkapnya
          </Link>
          <Link href="">
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-2xl text-center">
          Tipe ?
        </div>
        <p className="px-3 text-center text-[14px] text-slate-600">
          Ada beberapa tipe kategori dalam pembuatan jersey custom mulai dari
          Full Print, Half Print, dan Non-Print.
        </p>
        <div className="py-1 px-2 text-[16px] font-light flex justify-center items-center italic">
          <Link href="" className="mx-5">
            Klik Selengkapnya
          </Link>
          <Link href="">
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
