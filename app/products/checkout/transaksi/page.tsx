import React from "react";
import { auth } from "@/auth";
import { getDataUser } from "@/components/checkout/data";
import Script from "next/script";
import {
  ButtonTransaksi,
  DeleteButton,
} from "@/components/checkout/button-transaksi";
import type { trsingle } from "@prisma/client";
import Link from "next/link";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const riwayatTrans = async () => {
  const session: any = await auth();
  const user_id = session.user.id;
  const getData: any = await getDataUser(user_id);

  return (
    <div className="h-full mb-8">
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <div className="tablet:mx-10 laptop:mx-14 laptop:w-1/2">
        <div className="mx-4 my-2">
          <div className="text-lg font-bold my-3 mx-6 border-b">
            Daftar Riwayat Transaksi
          </div>
          {getData?.map((list: trsingle, i: any) => (
            <div className="" key={list.id}>
              <div className="w-full m-1 flex">
                <p className="text-sm p-1 mr-2">{i + 1}</p>
                <div className="flex justify-between w-full">
                  <div className="">
                    <div className="text-[15px] font-medium">
                      {list.nama_product}
                    </div>
                    <div className="m-1 text-sm font-medium text-slate-500">
                      {rupiah.format(list.total)}
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      No Transaksi : {list.id}
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      Status : {list.status_kirim}
                    </div>
                  </div>
                  <Link
                    href={`/products/checkout/transaksi/${list.id}`}
                    className="text-[11px] text-slate-500 italic self-start p-4 underline"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
              {list.status_kirim === "Pembayaran Berhasil" ? (
                <></>
              ) : (
                <div className="flex justify-around mx-2 my-4">
                  <DeleteButton id={list.id} />
                  <ButtonTransaksi id={list} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default riwayatTrans;
