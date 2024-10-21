import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { getDataById, getDataUser } from "@/components/checkout/data";
import Script from "next/script";
import DaftarRiwayatTrans from "@/components/checkout/list-transaksi";

const riwayatTrans = async () => {
  const session: any = await auth();
  const user_id = session.user.id;
  const getData = await getDataUser(user_id);

  return (
    <div className="h-full mb-48">
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <DaftarRiwayatTrans data={getData} />
    </div>
  );
};

export default riwayatTrans;
