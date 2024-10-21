import Script from "next/script";
import { auth } from "@/auth";
import { getListProducts } from "@/components/chart/data";
import ChartCard from "@/components/chart/chart";
import type { chart } from "@prisma/client";

export default async function ChartPage() {
  const session: any = await auth();
  const user_id = session.user.id;
  const data: chart = await getListProducts(session?.user.id);

  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <ChartCard data={data} user_id={user_id} />
    </div>
  );
}
