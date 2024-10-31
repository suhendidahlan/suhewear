"use client";
import { useState } from "react";
import Image from "next/image";
import type { produk } from "@prisma/client";
import Select from "react-select";
import { optionCity } from "@/lib/ongkir/city";
import { listKurir } from "@/lib/ongkir/courier";

declare global {
  interface Window {
    snap: any;
  }
}

interface optionPicked {
  label: string;
  value: string;
}
interface optionKurir {
  label: number;
  value: number;
}

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const BuyNowCard = ({ data }: { data: produk }) => {
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [city, setCity] = useState("");
  const [ket, setKet] = useState("");

  const [optionPicked, setOptionPicked] = useState<optionPicked>();
  const [optionKurir, setOptionKurir] = useState<optionKurir>();
  const berat = (data.berat * qty) / 1000;

  const stok = 5;

  const kotaPilih = optionPicked ? optionPicked.value : "";

  const sub_total = data.harga * qty;
  const pajak_jml = data.harga * qty * 0.11;
  const ongkir_jml = optionKurir ? optionKurir.value * qty : 0;
  const [disc_jml, setDiscJml] = useState(0);
  const [inputDisc, setInputDisc] = useState("");

  async function handleDiskon(e: any) {
    e.preventDefault();

    if (inputDisc === "abc") {
      setDiscJml(2000);
    } else {
      setDiscJml(0);
    }
  }

  const total: number = sub_total + pajak_jml + ongkir_jml - disc_jml;

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

  async function handleSubmit(e: any) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      id_product: data.id,
      title: data.title + " " + "(" + size + ")",
      price: data.harga,
      sub_total,
      qty,
      size,
      ket,
      berat,
      pajak_jml,
      nama,
      email,
      phone,
      nama_ship: nama,
      telp,
      alamat,
      optionPicked,
      optionKurir,
    };

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const requestData = await response.json();
    console.log({ requestData });
    window.snap.pay(requestData.token);
  }

  return (
    <div key={data.id}>
      <form className="tablet:mx-14 laptop:mx-14 laptop:w-1/2">
        <div className="mx-4 my-2">
          <div className="text-xl font-bold my-3 border-b">Checkout</div>
          <div className="flex justify-around">
            <Image
              src={data.image1}
              alt=""
              width={200}
              height={200}
              className="m-1 w-[70px] laptop:w-[200px]"
            />
            <div className="">
              <input type="text" className="hidden" value={data.title} />
              <input type="text" className="hidden" value={data.berat * qty} />
              <div className="m-1 text-[13px] font-medium">{data.title}</div>
              <div className="m-1 text-[11px] text-slate-500 italic">
                Weight : {data.berat * qty} gr
              </div>
            </div>

            <div className="m-1 text-sm font-medium text-slate-500">
              {rupiah.format(data.harga)}
            </div>
            <input type="text" className="hidden" value={data.harga} />
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
          <div className="grid grid-cols-1 px-12">
            <input
              type="text"
              value={ket}
              onChange={(e) => setKet(e.target.value)}
              placeholder="Tulis Keterangan (opsional)"
              className="p-2 text-xs text-center border rounded-lg"
            />
          </div>
          <div className="m-3 p-1">
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-600">Sub Total Produk :</p>
              <p className="text-xs">{rupiah.format(sub_total)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-600">Pajak PPN ( 11% ) :</p>
              <p className="text-xs italic text-slate-400">
                {rupiah.format(pajak_jml)}
              </p>
              <input type="text" value={pajak_jml} className="hidden" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-600">
                Ongkos Kirim (Shipping) * qty :
              </p>
              {ongkir_jml > 1 ? (
                <p className="text-xs">{rupiah.format(ongkir_jml)}</p>
              ) : (
                <p className="text-xs">Rp 0,-</p>
              )}

              <input type="text" value={ongkir_jml} className="hidden" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs italic text-slate-600">Disc :</p>
              <p className="text-xs">-( {rupiah.format(disc_jml)} )</p>
              <input type="text" value={disc_jml} className="hidden" />
            </div>
            <div className="flex justify-between items-center m-3">
              <p className="text-md font-bold">Total :</p>
              {total > 1 ? (
                <p className="text-md font-bold">{rupiah.format(total)}</p>
              ) : (
                <p className="text-md font-bold">Rp 0,-</p>
              )}

              <input type="text" value={total} className="hidden" />
            </div>
          </div>
        </div>
        <div className="mx-4 mt-2 mb-6">
          <div className="text-xl font-bold my-3 border-b">Contact</div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Email :</div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Email Address..."
            />
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Nomor Hp/WhatsApp :</div>
            <input
              type="text"
              name="wa"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Nomor Hp/WhatsApp..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
        </div>
        <div className="mx-4 my-2">
          <div className="text-xl font-bold my-3 border-b">Delivery</div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Nama Lengkap :</div>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Nama Lengkap..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">No. Telp/HP Tujuan :</div>
            <input
              type="text"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="No Telp/HP Tujuan..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Alamat :</div>
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Alamat Tujuan..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
          <div className="text-xl font-bold my-3 border-b">Shipping</div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">City :</div>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="hidden"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
            <Select
              options={optionCity}
              value={optionPicked}
              onChange={(e: any) => setOptionPicked(e)}
              placeholder="Pilih Kota..."
              className="text-sm my-4"
            />
            <div className="text-sm mx-2 my-1">Layanan Kurir (per qty) :</div>
            <Select
              options={listKurir.filter((list) => list.id_city === kotaPilih)}
              value={optionKurir}
              onChange={(e: any) => setOptionKurir(e)}
              placeholder="Pilih Kurir..."
              className="text-sm my-4"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-10">
          {/* <p className="my-3 text-sm text-green-600 italic">
                Data Lengkap, Silahkan Klik Link di bawah untuk melanjutkan
                transaksi
              </p> */}

          <div className="flex justify-center mt-6 mb-10">
            {email &&
            phone &&
            nama &&
            telp &&
            alamat &&
            optionPicked &&
            optionKurir &&
            size ? (
              <button
                type="submit"
                className="bg-slate-800 text-white py-3 px-20 rounded-md"
                onClick={handleSubmit}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-slate-500 text-white py-3 px-20 rounded-md"
                disabled
              >
                Data Belum Lengkap
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyNowCard;
