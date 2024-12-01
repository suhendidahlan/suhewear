"use client";
import { useState } from "react";
import Image from "next/image";
import type { produk } from "@prisma/client";
import Select from "react-select";
import { optionCity } from "@/lib/ongkir/city";
import { listKurir } from "@/lib/ongkir/courier";
import { useFormState } from "react-dom";
import { storeData, cekDiskon } from "@/components/checkout/actions";
import { SubmitButton } from "@/components/chart/button";
import { rupiah } from "@/components/intl/intl";

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
  label: string;
  value: number;
}

const BuyNowCardUser = ({
  data,
  user_id,
  diskon,
  kredit,
}: {
  data: produk;
  user_id: string;
  diskon: number;
  kredit: number;
}) => {
  const [state, formAction] = useFormState(storeData, null);
  const [stateDiskon, formActionDiskon] = useFormState(
    cekDiskon.bind(null, user_id),
    null
  );

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [city, setCity] = useState("");
  const [ket, setKet] = useState("");
  const keterangan = "single : " + ket;

  const [optionPicked, setOptionPicked] = useState<optionPicked>();
  const [optionKurir, setOptionKurir] = useState<optionKurir>();
  const berat = (data.berat * qty) / 1000;
  const finalWeight = Math.ceil(berat);

  const stok = 10;

  const alamatBelumLengkap = optionPicked ? optionPicked.label : "";
  const alamatLengkap = alamat + alamatBelumLengkap;

  const sub_total = data.harga * qty;
  const jmlDiskon = (sub_total * diskon) / 100;
  const pajak_jml = data.harga * qty * 0.11;
  const ongkir_jml = optionKurir ? optionKurir.value * finalWeight : 0;

  const kotaPilih = optionPicked ? optionPicked.value : "";
  const courier = optionKurir ? optionKurir.label : "";

  const disc_jml: number = jmlDiskon + kredit;

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

  return (
    <div key={data.id}>
      <div className="mx-10 my-3">
        {diskon || kredit > 0 ? (
          <div>
            <div className="text-sm mx-2 my-1 font-bold italic">
              # Your Claimed Disc : {diskon > 0 ? diskon + " %" : ""}
              {"  |  "}
              {kredit > 0 ? rupiah.format(kredit) : ""}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-sm mx-2 my-1 font-bold italic">
              # Kupon Discount :
            </div>
            <form action={formActionDiskon}>
              <div className="flex">
                <input
                  type="text"
                  name="token"
                  className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
                  placeholder="Masukan Kupon Jika Punya..."
                />
                <button
                  className="bg-slate-500 rounded-lg p-2 mx-2 text-white text-sm"
                  type="submit"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        )}
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-slate-700 mt-2 italic">
            {stateDiskon?.message}
          </p>
        </div>
      </div>
      <form
        action={formAction}
        className="tablet:mx-14 laptop:mx-14 laptop:w-1/2"
      >
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
              <div className="m-1 text-[13px] font-medium">{data.title}</div>
              <div className="m-1 text-[11px] text-slate-500 italic">
                Weight : {data.berat * qty} gr
              </div>
            </div>
            <div className="m-1 text-sm font-medium text-slate-500">
              {rupiah.format(data.harga)}
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
              <SubmitButton label="submit" />
            ) : (
              <button
                type="submit"
                className="bg-slate-500 text-white py-3 px-20 rounded-md text-sm"
                disabled
              >
                Next
              </button>
            )}
          </div>
        </div>
        <input type="text" name="user_id" value={user_id} className="hidden" />
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
        <input type="text" name="harga" value={data.harga} className="hidden" />
        <input type="text" name="size" value={size} className="hidden" />
        <input type="text" name="qty" value={qty} className="hidden" />
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
          value={alamatBelumLengkap}
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

export default BuyNowCardUser;
