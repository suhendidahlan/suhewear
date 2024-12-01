import { getDataTokenCat } from "@/components/token-diskon/data";
import type { tokenDiskon } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { DeleteButton } from "@/components/token-diskon/button";
import { rupiah } from "@/components/intl/intl";

const TokenDiskonPage = async () => {
  const percent = await getDataTokenCat("percent");
  const nominal = await getDataTokenCat("nominal");
  const poin = await getDataTokenCat("poin");
  const product = await getDataTokenCat("product");
  return (
    <div className="mb-20">
      <div className="flex justify-between mx-2 items-center">
        <div className="text-2xl font-bold border-b mb-4 mx-6 italic">
          # List DISC Token
        </div>
        <div className="text-sm bg-slate-700 text-white p-1 rounded-md">
          <Link href={`/dashboard/token-diskon/create`}>Create Token</Link>
        </div>
      </div>
      <div className="my-2">
        <div className="mx-4 text-md font-bold underline">Token Percent</div>
        <div className="flex justify-around items-center text-sm font-bold border-b m-2">
          <p className="">No</p>
          <p className="">Token</p>
          <p className="">Qty</p>
          <p className="">Credit</p>
          <p className="">?</p>
          <p className="">Del</p>
        </div>
        {percent.map((data: tokenDiskon, no: any) => (
          <div
            className="flex justify-around items-center text-sm border-b m-2"
            key={data.id}
          >
            <p className="">{no + 1}</p>
            <p className="">{data.token}</p>
            <p className="">{data.jumlah}</p>
            <p className="">{data.percent} %</p>
            <div className="">
              {data.isActive ? (
                <p className="text-green-500">Y</p>
              ) : (
                <p className="text-red-500">X</p>
              )}
            </div>
            <div className="">
              <DeleteButton id={data.id} />
            </div>
          </div>
        ))}
      </div>
      <div className="my-2">
        <div className="mx-4 text-md font-bold underline">Token Nominal</div>
        <div className="flex justify-around items-center text-sm font-bold border-b m-2">
          <p className="">No</p>
          <p className="">Token</p>
          <p className="">Qty</p>
          <p className="">Credit</p>
          <p className="">?</p>
          <p className="">Del</p>
        </div>
        {nominal.map((data: tokenDiskon, no: any) => (
          <div
            className="flex justify-around items-center text-sm border-b m-2"
            key={data.id}
          >
            <p className="">{no + 1}</p>
            <p className="">{data.token}</p>
            <p className="">{data.jumlah}</p>
            <p className="">
              {data.nominal !== null ? rupiah.format(data.nominal) : 0}
            </p>
            <div className="">
              {data.isActive ? (
                <p className="text-green-500">Y</p>
              ) : (
                <p className="text-red-500">X</p>
              )}
            </div>
            <div className="">
              <DeleteButton id={data.id} />
            </div>
          </div>
        ))}
      </div>
      <div className="my-2">
        <div className="mx-4 text-md font-bold underline">Token Poin</div>
        <div className="flex justify-around items-center text-sm font-bold border-b m-2">
          <p className="">No</p>
          <p className="">Token</p>
          <p className="">Qty</p>
          <p className="">Credit</p>
          <p className="">?</p>
          <p className="">Del</p>
        </div>
        {poin.map((data: tokenDiskon, no: any) => (
          <div
            className="flex justify-around items-center text-sm border-b m-2"
            key={data.id}
          >
            <p className="">{no + 1}</p>
            <p className="">{data.token}</p>
            <p className="">{data.jumlah}</p>
            <p className="">{data.poin}</p>
            <div className="">
              {data.isActive ? (
                <p className="text-green-500">Y</p>
              ) : (
                <p className="text-red-500">X</p>
              )}
            </div>
            <div className="">
              <DeleteButton id={data.id} />
            </div>
          </div>
        ))}
      </div>
      <div className="my-2">
        <div className="mx-4 text-md font-bold underline">Token Product</div>
        <div className="flex justify-around items-center text-sm font-bold border-b m-2">
          <p className="">No</p>
          <p className="">Token</p>
          <p className="">Qty</p>
          <p className="">Credit</p>
          <p className="">?</p>
          <p className="">Del</p>
        </div>
        {product.map((data: tokenDiskon, no: any) => (
          <div
            className="flex justify-around items-center text-sm border-b m-2"
            key={data.id}
          >
            <p className="">{no + 1}</p>
            <p className="">{data.token}</p>
            <p className="">{data.jumlah}</p>
            <p className="w-1/4">{data.product} %</p>
            <div className="">
              {data.isActive ? (
                <p className="text-green-500">Y</p>
              ) : (
                <p className="text-red-500">X</p>
              )}
            </div>
            <div className="">
              <DeleteButton id={data.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenDiskonPage;
