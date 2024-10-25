import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDataProductTerbaru } from "@/components/products/data";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const ProdukTerbaruCard = async () => {
  const images = await getDataProductTerbaru();
  return (
    <div className="mx-2 container flex overflow-x-scroll min-w-full">
      {images.map((data) => (
        <div
          className="m-0.5 block text-center min-w-40 rounded-md"
          key={data.id}
        >
          <div className="p-2">
            {data.status === "sold out" ? (
              <div>
                <div className="bg-slate-700 text-white text-xs rounded-lg absolute p-1.5 italic">
                  sold out
                </div>
                <div>
                  <Image
                    className="rounded-md opacity-50 grayscale"
                    src={data.image1}
                    alt={data.title}
                    width={160}
                    height={200}
                  />
                </div>
              </div>
            ) : (
              <div>
                {data.disc_label === "no" ? (
                  <div>
                    <Link href={`/products/${data.id}`}>
                      <Image
                        className="rounded-md"
                        src={data.image1}
                        alt={data.title}
                        width={160}
                        height={200}
                      />
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link href={`/products/${data.id}`}>
                      <Image
                        className="rounded-md"
                        src={data.image1}
                        alt={data.title}
                        width={160}
                        height={200}
                      />
                    </Link>
                    <div className="bg-green-700 text-white text-[10px] rounded-lg p-0.5 italic w-[60px]">
                      {data.disc_label}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="py-1 px-2 text-[13px] font-bold text-center">
            {data.status === "sold out" ? (
              <div>{data.title}</div>
            ) : (
              <Link href={`/products/${data.id}`}>{data.title}</Link>
            )}
          </div>
          {data.harga_disc > 0 ? (
            <div className="flex justify-around items-center mb-4 py-0.5 px-2">
              <div
                className="text-xs font-light text-slate-600"
                style={{ textDecoration: "line-through" }}
              >
                {rupiah.format(data.harga_disc)}
              </div>
              <div className="text-sm font-normal">
                {rupiah.format(data.harga)}
              </div>
            </div>
          ) : (
            <div className="mb-4 py-0.5 px-2 text-sm font-normal">
              {rupiah.format(data.harga)}
            </div>
          )}

          {/* <button className="mb-3 mt-1 bg-red-500 px-5 py-1 rounded-md">
            Lihat
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default ProdukTerbaruCard;
