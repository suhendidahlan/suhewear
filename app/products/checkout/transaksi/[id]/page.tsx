import React from "react";
import { getDataById } from "@/components/checkout/data";
import DetailRiwayatTrans from "@/components/checkout/detail-transaksi";

const riwayatTransDetail = async ({ params }: { params: { id: string } }) => {
  const getData: any = await getDataById(params.id);

  return (
    <div className="h-full mb-20 tablet:mx-10 laptop:mx-14 laptop:w-1/2">
      <DetailRiwayatTrans data={getData} />
    </div>
  );
};

export default riwayatTransDetail;
