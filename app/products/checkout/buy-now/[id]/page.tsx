import { getImageById } from "@/components/products/data";
import { notFound } from "next/navigation";
import BuyNowCard from "@/components/products/buy-now-card";
import { useEffect } from "react";
import Script from "next/script";

export default async function BuyNowPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getImageById(params.id);
  if (!data) return notFound;
  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <BuyNowCard data={data} />
    </div>
  );
}
