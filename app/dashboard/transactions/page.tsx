import { getData } from "@/components/checkout/data";
import React from "react";
import Link from "next/link";
import { trsingle } from "@prisma/client";

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

const AdminTransactionsList = async () => {
  const data = await getData();
  return (
    <div className="mx-6 mb-10">
      <div className="text-2xl font-bold border-b">Transactions (admin)</div>
      {data?.map((list: trsingle, i: any) => (
        <div className="flex text-sm my-2" key={list.id}>
          <div className="m-1 w-[5%]">{i + 1}</div>
          <div className="m-1 w-[95%]">
            <div className="flex justify-between">
              <Link
                href={`/dashboard/transactions/${list.id}`}
                className="font-bold"
              >
                {list.nama}
              </Link>
              <p className="mx-1">( {list.id} )</p>
            </div>
            <p className="text-sm font-medium text-slate-500">
              {rupiah.format(list.total)}
            </p>
            <div className="italic">Products: {list.nama_product}</div>
            <div className="italic">{tanggal.format(list.createdAt)}</div>
            <div className="flex justify-between">
              <p>Ket: {list.keterangan}</p>
              <p>Bayar : {list.status_kirim}</p>
            </div>
            <div className="flex justify-around bg-slate-200 p-1">
              <p>Shipments:</p>
              <p>{list.update_kirim}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminTransactionsList;
