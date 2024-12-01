import React from "react";
import { getDataById } from "@/components/checkout/data";
import DetailRiwayatTransEdit from "@/components/checkout/edit-detail-transaksi";
import { updateDataTransById } from "@/components/midtrans/data";

const TransactionListAdmin = async ({ params }: { params: { id: string } }) => {
  const getData: any = await getDataById(params.id);

  return (
    <div className="h-full mb-20">
      <DetailRiwayatTransEdit data={getData} />
    </div>
  );
};

export default TransactionListAdmin;
