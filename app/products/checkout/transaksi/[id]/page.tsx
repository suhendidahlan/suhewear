import React from "react";
import { getDataById } from "@/components/checkout/data";
import DetailRiwayatTrans from "@/components/checkout/detail-transaksi";
import { updateDataTransById } from "@/components/midtrans/data";

const riwayatTransDetail = async ({ params }: { params: { id: string } }) => {
  const getData: any = await updateDataTransById(params.id);

  return (
    <div className="h-full mb-20 tablet:mx-10 laptop:mx-14 laptop:w-1/2">
      <DetailRiwayatTrans data={getData} />
    </div>
  );
};

export default riwayatTransDetail;
