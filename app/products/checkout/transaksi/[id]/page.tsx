import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { getDataById } from "@/components/checkout/data";
import DetailRiwayatTrans from "@/components/checkout/detail-transaksi";
import { trsingle } from "@prisma/client";

const riwayatTransDetail = async ({ params }: { params: { id: string } }) => {
  const getData: any = await getDataById(params.id);

  return (
    <div className="h-full mb-20">
      <DetailRiwayatTrans data={getData} />
    </div>
  );
};

export default riwayatTransDetail;
