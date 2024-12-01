"use client";
import type { trsingle } from "@prisma/client";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiCardboardBox } from "react-icons/gi";
import { RiHandCoinLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";
import { rupiah } from "@/components/intl/intl";
import { tanggal } from "@/components/intl/intl";

const DetailRiwayatTrans = ({ data }: { data: trsingle }) => {
  return (
    <div className="">
      <div className="mx-4 my-2">
        <div className="text-lg italic font-bold my-3 border-b">
          # Transaction Detail
        </div>

        <div className="">
          <div className="w-full m-1 flex">
            <div className="w-full">
              <div className="text-sm text-slate-500 italic mb-2">
                Transaction ID : {data.id}
              </div>
              <div className="text-sm text-slate-500 italic mb-2">
                Tanggal : {tanggal.format(data.createdAt)}
              </div>
              <div className="text-sm font-medium">
                Product /s : <br /> - {data.nama_product}
              </div>
              <div className="text-xs text-slate-500 italic mt-2">
                Status : {data.status_kirim}
              </div>
              <div className="text-xs text-slate-500 italic mt-2">
                Berat / Weight : {data.berat} gr.
              </div>
              <div className="m-3 p-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-600">Sub Total Produk :</p>
                  <p className="text-xs">{rupiah.format(data.harga)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-600">Pajak PPN ( 11% ) :</p>
                  <p className="text-xs italic text-slate-400">
                    {rupiah.format(data.pajak)}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-600">
                    Ongkos Kirim (Shipping) * weight :
                  </p>
                  {data.pajak > 1 ? (
                    <p className="text-xs">{rupiah.format(data.ongkir)}</p>
                  ) : (
                    <p className="text-xs">Rp 0,-</p>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs italic text-slate-600">Disc :</p>
                  <p className="text-xs">-( {rupiah.format(data.disc)} )</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-md font-bold">Total :</p>
                  <p className="text-md font-bold">
                    {rupiah.format(data.total)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">Nama Customer :</p>
                <p className="text-sm">{data.nama}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">Email :</p>
                <p className="text-sm">{data.email}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">No. WA/Telp :</p>
                <p className="text-sm">{data.wa}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">
                  Contact Shipment :
                </p>
                <p className="text-sm">{data.wa}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">Paket Kirim :</p>
                <p className="text-sm">{data.kurir} / kg</p>
              </div>
              <div className="mx-10 my-1">
                <p className="text-xs italic text-slate-500">Alamat :</p>
                <p className="text-xs mt-1 mb-3 text-center">
                  {data.alamat_kirim}
                </p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">Keterangan :</p>
                <p className="text-xs">({data.keterangan})</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">City :</p>
                <p className="text-xs">{data.city}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">No. Resi :</p>
                <p className="text-xs">{data.resi}</p>
              </div>
              <div className="flex justify-between mx-10 my-1 items-center">
                <p className="text-xs italic text-slate-500">
                  Update Shipment :
                </p>
                <p className="text-sm">{data.update_kirim}</p>
              </div>
              <div className="">
                {data.update_kirim === "Sedang Dikemas" && (
                  <div className="m-10">
                    <div className="opacity-70 my-1">
                      <GiCardboardBox size={60} />
                      <p className="text-sm italic">Sedang Dikemas</p>
                    </div>
                  </div>
                )}
                {data.update_kirim === "Sedang Dikirim" && (
                  <div className="m-10">
                    <div className="opacity-40 my-1">
                      <GiCardboardBox size={30} />
                    </div>
                    <div className="mx-4"> | </div>
                    <div className="opacity-70 my-1">
                      <LiaShippingFastSolid size={60} />
                      <p className="text-sm italic">Sedang Dikirim</p>
                    </div>
                  </div>
                )}
                {data.update_kirim === "Sudah Diterima" && (
                  <div className="m-10">
                    <div className="opacity-40 my-1">
                      <GiCardboardBox size={30} />
                    </div>
                    <div className="mx-4"> | </div>
                    <div className="opacity-40 my-1">
                      <LiaShippingFastSolid size={30} />
                    </div>
                    <div className="mx-4"> | </div>
                    <div className="opacity-70 my-1">
                      <RiHandCoinLine size={60} />
                      <p className="text-sm italic">Sudah Diterima</p>
                    </div>
                  </div>
                )}
                {data.update_kirim === "Refund" && (
                  <div className="m-10">
                    <div className="opacity-70 my-1">
                      <RiRefund2Line size={60} />
                      <p className="text-sm italic">Refund</p>
                    </div>
                  </div>
                )}
                {data.update_kirim === "Barang Ditukar" && (
                  <div className="m-10">
                    <div className="opacity-70 my-1">
                      <TbArrowsExchange size={60} />
                      <p className="text-sm italic">Barang Ditukar</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatTrans;
