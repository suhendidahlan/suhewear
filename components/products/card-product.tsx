"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { produk, User } from "@prisma/client";
import { storeData } from "@/components/chart/actions";
import { useFormState } from "react-dom";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const CardProduct = ({ data, session }: { data: produk; session: any }) => {
  const [state, formAction] = useFormState(storeData, null);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const stok = 5;
  const [gambar, setGambar] = useState(data.image1);

  function handleGambar1(e: any) {
    e.preventDefault();
    setGambar(data.image1);
  }
  function handleGambar2(e: any) {
    e.preventDefault();
    setGambar(data.image2);
  }
  function handleGambar3(e: any) {
    e.preventDefault();
    setGambar(data.image3);
  }

  function handleTambahQty() {
    if (size) {
      if (qty < stok) {
        setQty(qty + 1);
      }
    }
  }
  function handleKurangQty() {
    if (size) {
      if (qty > 1) {
        setQty(qty - 1);
      } else {
        setQty(1);
      }
    }
  }
  const [pilihSize, setPilihSize] = useState("");
  const pSize = (e: any) => {
    e.preventDefault();
    setPilihSize("Pilih size terlebih dahulu.");
  };

  return (
    <div>
      <div className="px-5 tablet:px-10 laptop:px-14" key={data.id}>
        <div className="laptop:flex laptop:justify-between">
          <div className="laptop:w-1/2 laptop:m-4">
            <Link
              href={gambar}
              className="flex justify-center items-center bg-slate-100 p-5"
            >
              <Image
                src={gambar}
                alt=""
                width={500}
                height={500}
                className="w-[250px] laptop:w-[500px]"
              />
            </Link>
            <div className="flex laptop:m-4">
              <Image
                src={data.image1}
                alt=""
                width={100}
                height={100}
                className="m-1 cursor-pointer"
                onClick={handleGambar1}
              />
              <Image
                src={data.image2}
                alt=""
                width={100}
                height={100}
                className="m-1 cursor-pointer"
                onClick={handleGambar2}
              />
              <Image
                src={data.image3}
                alt=""
                width={100}
                height={100}
                className="m-1 cursor-pointer"
                onClick={handleGambar3}
              />
            </div>
          </div>
          <div className="laptop:w-1/2 laptop:m-4">
            <div className="p-2">
              <div className="text-2xl font-bold">{data.title}</div>
              {data.harga_disc > 0 ? (
                <div className="my-2">
                  <div
                    className="text-md font-normal text-slate-400"
                    style={{ textDecoration: "line-through" }}
                  >
                    {rupiah.format(data.harga_disc)}
                  </div>
                  <div className="text-lg font-medium text-slate-600">
                    {rupiah.format(data.harga)}
                  </div>
                </div>
              ) : (
                <div className="my-2 text-lg font-medium text-slate-600">
                  {rupiah.format(data.harga)}
                </div>
              )}

              <div className="text-xs italic">
                * Belum termasuk PPN dan Ongkir
              </div>
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
            </div>
            <div className="flex justify-around items-center">
              <p className="flex items-center p-3 m-2 text-sm">Size:</p>
              <div className="text-sm">
                <select
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="my-4 p-3"
                >
                  <option>Pilih Size</option>
                  <option
                    value={"XS"}
                    className={data.size_xs > 0 ? "block" : "hidden"}
                  >
                    XS
                  </option>
                  <option
                    value={"S"}
                    className={data.size_s > 0 ? "block" : "hidden"}
                  >
                    S
                  </option>
                  <option
                    value={"M"}
                    className={data.size_m > 0 ? "block" : "hidden"}
                  >
                    M
                  </option>
                  <option
                    value={"L"}
                    className={data.size_l > 0 ? "block" : "hidden"}
                  >
                    L
                  </option>
                  <option
                    value={"XL"}
                    className={data.size_xl > 0 ? "block" : "hidden"}
                  >
                    XL
                  </option>
                  <option
                    value={"XXL"}
                    className={data.size_xxl > 0 ? "block" : "hidden"}
                  >
                    XXL
                  </option>
                  <option
                    value={"XXXL"}
                    className={data.size_xxxl > 0 ? "block" : "hidden"}
                  >
                    3XL
                  </option>
                </select>
              </div>
              <div className="flex items-center justify-around p-2">
                <p className="flex items-center p-3 my-3 text-sm">Qty:</p>
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
                />
                <p
                  className="flex items-center font-bold p-3 rounded-lg my-3 cursor-pointer"
                  onClick={handleTambahQty}
                >
                  +
                </p>
              </div>
            </div>
            {pilihSize ? (
              <p className="text-sm italic text-red-500">{pilihSize}</p>
            ) : (
              <></>
            )}
            <div className="grid grid-cols-2 gap-1 my-3">
              {session ? (
                <Link
                  href={`/products/checkout/session/${data.id}`}
                  className="bg-slate-800 text-white text-[13px] p-2 rounded-md text-center cursor-pointer"
                >
                  Buy Now
                </Link>
              ) : (
                <Link
                  href={`/products/checkout/buy-now/${data.id}`}
                  className="bg-slate-800 text-white text-[13px] p-2 rounded-md text-center cursor-pointer"
                >
                  Buy Now
                </Link>
              )}

              {session ? (
                // <div
                //   className="bg-slate-300 text-slate-700 text-[13px] p-2 rounded-md text-center cursor-pointer"
                //   onClick={handleAddToChart}
                // >
                //   Add to Chart
                // </div>
                <form action={formAction}>
                  <input
                    type="text"
                    name="id_product"
                    value={data.id}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="nama_product"
                    value={data.title}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="image_product"
                    value={data.image1}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="user_id"
                    value={session.user.id}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="berat"
                    value={data.berat}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="harga"
                    value={data.harga}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="size"
                    value={size}
                    className="hidden"
                  />
                  <input
                    type="text"
                    name="qty"
                    value={qty}
                    className="hidden"
                  />
                  {size ? (
                    <button
                      type="submit"
                      className="bg-slate-300 text-slate-700 text-[13px] p-2 rounded-md text-center cursor-pointer w-full"
                    >
                      Add to Chart
                    </button>
                  ) : (
                    <p
                      className="bg-slate-100 text-slate-700 text-[13px] p-2 rounded-md text-center cursor-pointer w-full"
                      onClick={pSize}
                    >
                      Add to Chart
                    </p>
                  )}
                </form>
              ) : (
                <Link
                  href={`/login`}
                  className="bg-slate-300 text-slate-700 text-[13px] p-2 rounded-md text-center cursor-pointer"
                >
                  Add to Chart
                </Link>
              )}
            </div>
            <div className="mb-6">
              <div className="">
                <p className="m-2 py-2 text-xl font-bold border-b">
                  Detail Product
                </p>
                <p className="p-2 text-[14px] text-slate-600">
                  {data.deskripsi}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-2 mx-2 bg-slate-100">
          <div className="px-5 py-2 text-slate-800 font-bold text-xl text-center">
            Size Chart
          </div>
          <p className="px-3 text-center text-[13px] text-slate-600 italic">
            List Ukuran Jersey by SUHE Apparel
          </p>
          <Link href={`/size chart jersey.jpg`} className="flex justify-center">
            <Image
              src={`/size chart jersey.jpg`}
              alt="size"
              width={600}
              height={600}
              className="m-2 w-[320px] laptop:w-[600px]"
            />
          </Link>
          <div className="flex justify-center">
            {/* <table className="text-center text-[15px] mb-5">
              <th className="p-1 border-b">Size</th>
              <th className="p-1 border-b">Panjang - Lebar ( cm )</th>

              <td className="p-1">XS</td>
              <td className="p-1 border-l">66 - 46</td>

              <td className="p-1">S</td>
              <td className="p-1 border-l">68 - 48</td>

              <td className="p-1">M</td>
              <td className="p-1 border-l">70 - 50</td>

              <td className="p-1">L</td>
              <td className="p-1 border-l">72 - 52</td>

              <td className="p-1">XL</td>
              <td className="p-1 border-l">74 - 54</td>

              <td className="p-1">2XL</td>
              <td className="p-1 border-l">76 - 56</td>
            </table> */}
          </div>
        </div>
        <div className="mb-6">
          <div className="">
            <p className="m-2 py-2 text-xl font-bold border-b">Shipping</p>
            <p className="p-2 text-[14px] text-slate-600">
              - Pastikan anda telah memilih jenis layanan kurir yang tersedia
              berdasarkan alamat pengiriman. <br />- Order akan diproses setelah
              melakukan pembayaran melalui payment gate yang tersedia. <br />
              - Update status pengiriman melalui detail transaksi pada akun
              anda. <br />- Apabila anda melalukan single transaction (tanpa
              akun), anda dapat menghubungi melalui WhatsApp CS Admin SUHE
              Apparel : 0859-6238-4140
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="">
            <p className="m-2 py-2 text-xl font-bold border-b">
              Return & Exchange
            </p>
            <p className="p-2 text-[14px] text-slate-600">
              - Pengembalian atau penukaran produk hanya dapat diproses H+7
              barang diterima. <br />- Pastikan untuk menghubungi terlebih
              dahulu contact WhatsApp CS Admin SUHE Apparel : 0859-6238-4140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
