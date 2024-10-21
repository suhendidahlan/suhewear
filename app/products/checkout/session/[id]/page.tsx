import { getImageById } from "@/components/products/data";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import { auth } from "@/auth";
import BuyNowCardUser from "@/components/products/buy-now-card-user";

export default async function BuyNowPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getImageById(params.id);
  if (!data) return notFound;
  const session = await auth();
  const id: any = session?.user.id;
  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <BuyNowCardUser data={data} user_id={id} />
    </div>
  );
}
