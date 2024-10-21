"use client";
import { useState } from "react";
import Image from "next/image";
import type { chart } from "@prisma/client";
import Select from "react-select";
import { optionCity } from "@/lib/ongkir/city";
import { listKurir } from "@/lib/ongkir/courier";
import { DeleteButton } from "@/components/chart/button";
import { useFormState } from "react-dom";
import { storeData } from "@/components/checkout/actions";
import { getProductById } from "./data";

declare global {
  interface Window {
    snap: any;
  }
}

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const ChartCard = ({ data, user_id }: { data: chart; user_id: string }) => {
  const [state, formAction] = useFormState(storeData, null);

  const id_product = [data.map((list: chart) => list.id_product)].reduce(
    (a: string, b: string) => a + ", " + b
  );

  const title = [
    data.map(
      (list: chart) =>
        list.nama_product + " : " + list.qty + " (" + list.size + ")"
    ),
  ].reduce((a: string, b: string) => a + ", " + b);

  const size = [data.map((list: chart) => list.size)].reduce(
    (a: string, b: string) => a + ", " + b
  );

  //set harga products
  const finalHarga = data
    .map((list: chart) => list.harga * list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  //set qty
  const finalqty = data
    .map((list: chart) => list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  const berat = data
    .map((list: chart) => list.berat)
    .reduce((a: number, b: number) => a + b, 0);

  const [qty, setQty] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [city, setCity] = useState("");
  const [ket, setKet] = useState("");
  const keterangan = "multi : " + ket;

  const [optionPicked, setOptionPicked] = useState({});
  const [optionKurir, setOptionKurir] = useState(0);

  const courier = optionKurir.label;

  const sub_total = finalHarga;
  const pajak_jml = finalHarga * 0.11;
  const ongkir_jml: number = optionKurir.value * finalqty;
  const disc_jml: number = 0;
  const total: number = sub_total + pajak_jml + ongkir_jml - disc_jml;

  const alamatLengkap = alamat + ", " + optionPicked.label;

  async function handleSubmit(e: any) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      data,
      nama,
      email,
      phone,
      nama_ship: nama,
      telp,
      alamat,
      optionKurir,
      optionPicked,
      ket,
    };

    const response = await fetch("/api/gateway", {
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
      <div className="mx-4 my-2">
        <div className="text-xl font-bold my-3 border-b">Checkout</div>
        {data.map((data: chart) => (
          <div className="mt-6">
            <div className="flex justify-between">
              <div className="">
                <DeleteButton id={data.id} />
              </div>
              <Image
                src={data.image_product}
                alt=""
                width={70}
                height={70}
                className="m-1"
              />
              <div className="">
                <div className="mx-1 text-[13px] font-medium">
                  {data.nama_product}
                </div>
                <div className="mx-1 text-[11px] text-slate-500 italic">
                  Weight : {data.berat * qty} gr
                </div>
                <div className="mx-1 text-[11px] text-slate-500 italic">
                  Size : {data.size}
                </div>
                <div className="mx-1 text-[11px] text-slate-500 italic">
                  Quantity : {data.qty} pcs
                </div>
              </div>

              <div className="m-1 text-sm font-medium text-slate-500">
                {rupiah.format(data.harga)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form action={formAction}>
        <div className="mx-8 mt-1 mb-5 flex justify-center">
          <input
            type="text"
            value={ket}
            onChange={(e) => setKet(e.target.value)}
            placeholder="Tulis Keterangan (opsional)"
            className="p-2 text-xs text-center border rounded-lg w-full"
          />
        </div>
        <div className="mx-4 my-2">
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
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs italic text-slate-600">Disc :</p>
              <p className="text-xs">-( {rupiah.format(disc_jml)} )</p>
            </div>
            <div className="flex justify-between items-center m-3">
              <p className="text-md font-bold">Total :</p>
              {total > 1 ? (
                <p className="text-md font-bold">{rupiah.format(total)}</p>
              ) : (
                <p className="text-md font-bold">Rp 0,-</p>
              )}
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
              name="nama"
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
              name="hp"
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
              options={listKurir.filter(
                (list) => list.id_city === optionPicked.value
              )}
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

          <div
            className="flex justify-center mt-6 mb-10"
            // onClick={handleSubmit}
          >
            {email && phone ? (
              <button
                type="submit"
                className="bg-slate-800 text-white py-3 px-20 rounded-md"
                // onClick={handleTransaction}
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
        <input type="text" name="user_id" value={user_id} className="hidden" />
        <input
          type="text"
          name="id_product"
          value={id_product}
          className="hidden"
        />
        <input
          type="text"
          name="nama_product"
          value={title}
          className="hidden"
        />
        <input type="text" name="harga" value={finalHarga} className="hidden" />
        <input type="text" name="size" value={size} className="hidden" />
        <input type="text" name="qty" value={finalqty} className="hidden" />
        <input type="text" name="berat" value={berat} className="hidden" />
        <input
          type="text"
          name="keterangan"
          value={keterangan}
          className="hidden"
        />
        <input
          type="text"
          name="ongkir"
          value={ongkir_jml}
          className="hidden"
        />
        <input type="text" name="pajak" value={pajak_jml} className="hidden" />
        <input type="text" name="disc" value={disc_jml} className="hidden" />
        <input type="text" name="total" value={total} className="hidden" />
        <input type="text" name="kurir" value={courier} className="hidden" />
        <input
          type="text"
          name="city"
          value={optionPicked.label}
          className="hidden"
        />
        <input
          type="text"
          name="alamat_kirim"
          value={alamatLengkap}
          className="hidden"
        />
      </form>
    </div>
  );
};

export default ChartCard;
