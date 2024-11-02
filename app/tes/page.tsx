import Tes from "@/components/tes/tes";
import { TesData } from "../api/tes/route";

export default async function BuyNowPage() {
  const data = await TesData("dfsdfws");
  console.log(data);
  return (
    <div>
      <div className="">Status: {data.transaction_status}</div>
      <Tes />
    </div>
  );
}
