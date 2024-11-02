import React from "react";
import { auth } from "@/auth";
import { getDataUser } from "@/components/checkout/data";
import { redirect } from "next/navigation";
import Link from "next/link";

const SuccessTransaction = async () => {
  const session: any = await auth();
  if (!session || !session.user) redirect("/");
  const user_id = session.user.id;
  const getData: any = await getDataUser(user_id);
  console.log(getData);
  return (
    <div className="text-center m-10">
      <div className="text-md text-green-500 italic">Transaksi Berhasil.</div>
      <p className="text-sm my-4">
        Silahkan Cek Daftar Riwayat Transaksi untuk melihat update proses
        pengiriman barang anda.
      </p>
      <div className="underline">
        <Link href={`/`} className="text-sm font-bold">
          {" "}
          &lt;&lt; Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessTransaction;
