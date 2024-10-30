"use client";
import type { trsingle } from "@prisma/client";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

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
              <div className="text-sm font-medium">
                Product /s : <br /> - {data.nama_product}
              </div>
              <div className="text-xs text-slate-500 italic mt-4">
                Status : {data.status_kirim}
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
                    Ongkos Kirim (Shipping) * qty :
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
                <p className="text-sm">{data.kurir} / pcs</p>
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
                <p className="text-xs italic text-slate-500">
                  Update Shipment :
                </p>
                <p className="text-sm">{data.update_kirim}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatTrans;
