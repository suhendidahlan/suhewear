"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { produk } from "@prisma/client";
import Checkout from "../checkout/checkout";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const CardProduct = ({ data }: { data: produk }) => {
  const [size, setSize] = useState("Belum Pilih");
  const [qty, setQty] = useState(1);
  const [quickBuy, setQuickBuy] = useState(false);

  function handleTambahQty() {
    setQty(qty + 1);
  }
  function handleKurangQty() {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const newItem = {
      id: data.id,
      title: data.title,
      harga: data.harga,
      size,
      qty,
    };
    console.log(newItem);
  }
  return (
    <div>
      <div className="px-5" key={data.id}>
        <Link
          href={data.image1}
          className="flex justify-center items-center bg-slate-100 p-5"
        >
          <Image src={data.image1} alt="" width={250} height={250} />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <div className="text-2xl font-bold">{data.title}</div>
            <input
              type="text"
              className="text-2xl font-bold hidden"
              value={data.title}
              disabled
            />
            <input
              className="my-2 text-lg font-medium text-slate-600"
              disabled
              value={rupiah.format(data.harga)}
            />
            <div className="text-xs italic">* Tax inculded</div>
            <div className="">
              <p className="text-[14px] py-1">Avalible Size (Tersedia) :</p>
              <div className="flex">
                <p
                  className={
                    data.size_xs > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  XS
                </p>
                <p
                  className={
                    data.size_s > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  S
                </p>
                <p
                  className={
                    data.size_m > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  M
                </p>
                <p
                  className={
                    data.size_l > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  L
                </p>
                <p
                  className={
                    data.size_xl > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  XL
                </p>
                <p
                  className={
                    data.size_xxl > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  XXL
                </p>
                <p
                  className={
                    data.size_xxxl > 0
                      ? "bg-slate-300 p-2 rounded-lg m-1 text-[15px] font-medium"
                      : "hidden"
                  }
                >
                  XXXL
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="my-4 p-3"
                >
                  <option>Pilih Size</option>
                  <option
                    value="XS"
                    className={data.size_xs > 0 ? "block" : "hidden"}
                  >
                    XS
                  </option>
                  <option
                    value="S"
                    className={data.size_s > 0 ? "block" : "hidden"}
                  >
                    S
                  </option>
                  <option
                    value="M"
                    className={data.size_m > 0 ? "block" : "hidden"}
                  >
                    M
                  </option>
                  <option
                    value="L"
                    className={data.size_l > 0 ? "block" : "hidden"}
                  >
                    L
                  </option>
                  <option
                    value="XL"
                    className={data.size_xl > 0 ? "block" : "hidden"}
                  >
                    XL
                  </option>
                  <option
                    value="XXL"
                    className={data.size_xxl > 0 ? "block" : "hidden"}
                  >
                    XXL
                  </option>
                  <option
                    value="XXXL"
                    className={data.size_xxxl > 0 ? "block" : "hidden"}
                  >
                    3XL
                  </option>
                </select>
              </div>
              <div className="flex items-center justify-around w-1/2 p-2">
                <p className="flex items-center p-3 my-3">Qty :</p>
                <p
                  className="flex items-center font-bold p-3 rounded-lg my-3 cursor-pointer"
                  onClick={handleKurangQty}
                >
                  -
                </p>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-1/4 text-center bg-slate-200"
                  disabled
                />
                <p
                  className="flex items-center font-bold p-3 rounded-lg my-3 cursor-pointer"
                  onClick={handleTambahQty}
                >
                  +
                </p>
              </div>
            </div>
          </div>
          <div className={quickBuy ? "block" : "hidden"}>Biodata</div>
          <button
            type="submit"
            className={
              quickBuy
                ? "bg-slate-800 text-white text-[13px] px-20 py-2 rounded-md text-center"
                : "hidden"
            }
          >
            Buy Now
          </button>
          <div onClick={() => setQuickBuy(!quickBuy)}>
            {quickBuy ? (
              <div className="text-white text-[13px] px-20 py-2 rounded-md text-center my-1 cursor-pointer text-slate-700 ">
                ^ Kembali
              </div>
            ) : (
              <div className="bg-slate-800 text-white text-[13px] px-20 py-2 rounded-md text-center my-1 cursor-pointer">
                Quick Buy
              </div>
            )}
          </div>
        </form>
        <div className="mb-6">
          <div className="">
            <p className="m-2 py-2 text-xl font-bold border-b">
              Detail Product
            </p>
            <p className="p-2 text-[14px] text-slate-600">{data.deskripsi}</p>
          </div>
        </div>
        <div className="mt-4 mb-2 mx-2 bg-slate-100">
          <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
            Size Chart
          </div>
          <p className="px-3 text-center text-[13px] text-slate-600 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
        <div className="mb-6">
          <div className="">
            <p className="m-2 py-2 text-xl font-bold border-b">Shipping</p>
            <p className="p-2 text-[14px] text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio optio sed eum cupiditate totam laboriosam tempore
              blanditiis, velit necessitatibus ipsam veritatis illum sapiente ex
              nisi nemo perferendis ea ab inventore delectus quae minus ipsa
              dolorem corrupti? Voluptatum molestias distinctio.
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="">
            <p className="m-2 py-2 text-xl font-bold border-b">
              Return & Exchange
            </p>
            <p className="p-2 text-[14px] text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio optio sed eum cupiditate totam laboriosam tempore
              blanditiis, velit necessitatibus ipsam veritatis illum sapiente ex
              nisi nemo perferendis ea ab inventore delectus quae minus ipsa
              dolorem corrupti? Voluptatum molestias distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
