import React from "react";
import { getImageById } from "@/components/products/data";
import { notFound } from "next/navigation";
import CardProduct from "@/components/products/card-product";
import { auth } from "@/auth";
import ProdukTerbaruCard from "@/components/products/product-terbaru-card";

export default async function ProdukPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getImageById(params.id);
  if (!data) return notFound;

  const session = await auth();

  return (
    <div>
      <CardProduct data={data} session={session} />
      <div>
        <div className="px-6 py-2 text-lg font-bold mt-4">
          NEW PRODUCTS ARRIVALS
        </div>
        <ProdukTerbaruCard />
      </div>
    </div>
  );
}
