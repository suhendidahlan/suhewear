"use client";
import type { trsingle } from "@prisma/client";
import { updateDataTransaction } from "@/components/checkout/actions";
import { useFormState } from "react-dom";
import { DeleteButtonAdmin } from "@/components/checkout/button-transaksi";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

let tanggal = Intl.DateTimeFormat("id-ID", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const DetailRiwayatTransEdit = ({ data }: { data: trsingle }) => {
  const [state, formAction] = useFormState(
    updateDataTransaction.bind(null, data.id),
    null
  );
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
                Date : {tanggal.format(data.createdAt)}
              </div>
              <div className="text-sm font-medium">
                Product /s : <br /> - {data.nama_product}
              </div>
              <form action={formAction}>
                <div className="text-xs text-slate-500 italic mt-2">
                  Berat : {data.berat} gr.
                </div>
                <div className="text-xs text-slate-500 italic mt-2">
                  Status : {data.status_kirim}
                </div>
                <select name="status_kirim" className="text-sm p-1">
                  <option selected value={data.status_kirim}>
                    {data.status_kirim}
                  </option>
                  <option value="Menunggu Pembayaran">
                    Menunggu Pembayaran
                  </option>
                  <option value="Lunas">Lunas</option>
                  <option value="Dibatalkan">Dibatalkan</option>
                </select>
                <div className="text-xs text-slate-500 italic mt-2">
                  Shipment : {data.update_kirim}
                </div>
                <select name="update_kirim" className="text-sm p-1">
                  <option selected value={data.update_kirim}>
                    {data.update_kirim}
                  </option>
                  <option value="Sedang Dikemas">Sedang Dikemas</option>
                  <option value="Sedang Dikirim">Sedang Dikirim</option>
                  <option value="Sudah Diterima">Sudah Diterima</option>
                  <option value="Refund">Refund</option>
                  <option value="Barang Ditukar">Barang Ditukar</option>
                </select>
                <div className="text-sm m-2">
                  <p>No. Resi :</p>
                  <input
                    type="text"
                    name="resi"
                    className="p-2 bg-slate-200 rounded-md"
                    defaultValue={data.resi ? data.resi : ""}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-300 rounded-md p-2 mx-10 text-sm"
                >
                  Save
                </button>
              </form>
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
                <p className="text-xs italic text-slate-500">No. Resi :</p>
                <p className="text-xs">{data.resi}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <DeleteButtonAdmin id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatTransEdit;
