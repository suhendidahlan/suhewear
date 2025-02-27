import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FiArrowRight } from "react-icons/fi";
import FilterCustom from "@/components/custom/filter-custom";

export default function CustomBasketballPage() {
  return (
    <div className="mb-10">
      <div className="px-5 py-3 text-slate-800 italic font-bold text-xl">
        Soccer Jersey by SUHE
      </div>
      <FilterCustom />
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
          Jenis Pola
        </div>
        <div className="p-2 flex justify-center">
          <Link href={`/custom/basketball/pola`}>
            <Image
              className="rounded-md tablet:w-[300px]"
              src="/Sport activewear.jpg"
              alt=""
              width={160}
              height={200}
            />
          </Link>
        </div>
        <p className="px-3 text-center text-[13px] text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          exercitationem architecto consectetur iure iste atque animi quibusdam
          eveniet deleniti.
        </p>
        <div className="py-1 px-2 text-[13px] font-medium flex justify-center items-center italic">
          <Link href="/custom/basketball/pola" className="mx-5">
            Lihat Gambar Selengkapnya
          </Link>
          <Link href="/custom/basketball/pola">
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="text-center">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
          Jenis Kerah
        </div>
        <div className="p-2 flex justify-center">
          <Link href={`/custom/basketball/kerah`}>
            <Image
              className="rounded-md tablet:w-[300px]"
              src="/Sport activewear.jpg"
              alt=""
              width={160}
              height={200}
            />
          </Link>
        </div>
        <p className="px-3 text-center text-[13px] text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          exercitationem architecto consectetur iure iste atque animi quibusdam
          eveniet deleniti.
        </p>
        <div className="py-1 px-2 text-[13px] font-medium flex justify-center items-center italic">
          <Link href="/custom/basketball/kerah" className="mx-5">
            Lihat Gambar Selengkapnya
          </Link>
          <Link href="/custom/basketball/kerah">
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="text-center">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div className="mt-4 mb-2 mx-2 bg-slate-100">
        <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
          Size Chart
        </div>
        <p className="px-3 text-center text-[13px] text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          exercitationem architecto consectetur iure iste atque animi quibusdam
          eveniet deleniti.
        </p>
        <div className="flex justify-center">
          <table className="text-center text-[15px] mb-5">
            <tr className="">
              <th className="p-1 border-b">Size</th>
              <th className="p-1 border-b">Panjang - Lebar ( cm )</th>
            </tr>
            <tr className="">
              <td className="p-1">XS</td>
              <td className="p-1 border-l">66 - 46</td>
            </tr>
            <tr className="">
              <td className="p-1">S</td>
              <td className="p-1 border-l">68 - 48</td>
            </tr>
            <tr className="">
              <td className="p-1">M</td>
              <td className="p-1 border-l">70 - 50</td>
            </tr>
            <tr className="">
              <td className="p-1">L</td>
              <td className="p-1 border-l">72 - 52</td>
            </tr>
            <tr className="">
              <td className="p-1">XL</td>
              <td className="p-1 border-l">74 - 54</td>
            </tr>
            <tr className="">
              <td className="p-1">2XL</td>
              <td className="p-1 border-l">76 - 56</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
          Jenis Bahan / Material
        </div>
        <div className="p-2 flex justify-center">
          <Link href={`/custom/soccer/bahan`}>
            <Image
              className="rounded-md tablet:w-[300px]"
              src="/Sport activewear.jpg"
              alt=""
              width={160}
              height={200}
            />
          </Link>
        </div>
        <p className="px-3 text-center text-[13px] text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          exercitationem architecto consectetur iure iste atque animi quibusdam
          eveniet deleniti.
        </p>
        <div className="py-1 px-2 text-[13px] font-medium flex justify-center items-center italic">
          <Link href="/custom/soccer/bahan" className="mx-5">
            Lihat Gambar Selengkapnya
          </Link>
          <Link href="/custom/soccer/bahan">
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-2">
        <div className="px-5 py-2 text-slate-800 font-bold text-2xl text-center border-y bg-slate-100">
          Kategori Harga
        </div>
        <div className="border-b mb-8">
          <div className="px-5 py-2 text-slate-800 font-bold text-lg text-center">
            Full Print
          </div>
          <div className="p-2 flex justify-center">
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
          <p className="px-3 text-center text-[13px] text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            exercitationem architecto consectetur iure iste atque animi
            quibusdam eveniet deleniti.
          </p>
          <div className="flex justify-center">
            <table className="text-center text-[15px] mb-5">
              <tr className="">
                <th className="p-1 border-b">Bahan / Material</th>
                <th className="py-1 px-4 border-b">Harga per Setel</th>
              </tr>
              <tr className="">
                <td className="p-1">Stadar</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="">
                <td className="p-1">Premium</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Logo 3D</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Kaos Kaki</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Polyflex</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="border-b mb-8">
          <div className="px-5 py-2 text-slate-800 font-bold text-lg text-center">
            Half Print
          </div>
          <div className="p-2 flex justify-center">
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
          <p className="px-3 text-center text-[13px] text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            exercitationem architecto consectetur iure iste atque animi
            quibusdam eveniet deleniti.
          </p>
          <div className="flex justify-center">
            <table className="text-center text-[15px] mb-5">
              <tr className="">
                <th className="p-1 border-b">Bahan / Material</th>
                <th className="py-1 px-4 border-b">Harga per Setel</th>
              </tr>
              <tr className="">
                <td className="p-1">Stadar</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="">
                <td className="p-1">Premium</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Logo 3D</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Kaos Kaki</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Polyflex</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="mb-8">
          <div className="px-5 py-2 text-slate-800 font-bold text-lg text-center">
            Non - Print
          </div>
          <div className="p-2 flex justify-center">
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
          <p className="px-3 text-center text-[13px] text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            exercitationem architecto consectetur iure iste atque animi
            quibusdam eveniet deleniti.
          </p>
          <div className="flex justify-center">
            <table className="text-center text-[15px] mb-5">
              <tr className="">
                <th className="p-1 border-b">Bahan / Material</th>
                <th className="py-1 px-4 border-b">Harga per Setel</th>
              </tr>
              <tr className="">
                <td className="p-1">Stadar</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="">
                <td className="p-1">Premium</td>
                <td className="py-1 px-4 border-l">Rp. 150.000, 00</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Logo 3D</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Kaos Kaki</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-1">Polyflex</td>
                <td className="py-1 px-4 border-l">+ IDR 20 K - IDR 30 K</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="mx-8 mb-3 mt-1 bg-slate-800 text-white text-[13px] px-5 py-2 rounded-md text-center">
        <Link href="">Pre-Order Now</Link>
      </div>
    </div>
  );
}
