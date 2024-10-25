import Script from "next/script";
import { auth } from "@/auth";
import { getListProducts } from "@/components/chart/data";
import ChartCard from "@/components/chart/chart";
import type { chart } from "@prisma/client";
import Image from "next/image";
import { DeleteButton } from "@/components/chart/button";

declare global {
  interface Window {
    snap: any;
  }
}

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default async function ChartPage() {
  const session: any = await auth();
  const user_id = session.user.id;
  const data: any = await getListProducts(session?.user.id);

  const id_product = [data.map((list: chart) => list.id_product)].reduce(
    (a: string, b: string) => a + ", " + b
  );

  const title = [
    data.map(
      (list: chart) =>
        list.nama_product + " : " + list.qty + " (" + list.size + ")"
    ),
  ].reduce((a: string, b: string) => a + ", " + b);

  const size = [data.map((list: chart) => list.size)].reduce(
    (a: string, b: string) => a + ", " + b
  );

  //set harga products
  const finalHarga = data
    .map((list: chart) => list.harga * list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  //set qty
  const finalqty = data
    .map((list: chart) => list.qty)
    .reduce((a: number, b: number) => a + b, 0);

  const berat = data
    .map((list: chart) => list.berat)
    .reduce((a: number, b: number) => a + b, 0);

  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <div>
        <div className="mx-4 my-2">
          <div className="text-xl font-bold my-3 border-b">Checkout</div>
          {data?.map((data: chart) => (
            <div className="mt-6" key={data.id}>
              <div className="flex justify-between">
                <div className="">
                  <DeleteButton id={data.id} />
                </div>
                <Image
                  src={data.image_product}
                  alt=""
                  width={70}
                  height={70}
                  className="m-1"
                />
                <div className="">
                  <div className="mx-1 text-[13px] font-medium">
                    {data.nama_product}
                  </div>
                  <div className="mx-1 text-[11px] text-slate-500 italic">
                    Weight : {data.berat * data.qty} gr
                  </div>
                  <div className="mx-1 text-[11px] text-slate-500 italic">
                    Size : {data.size}
                  </div>
                  <div className="mx-1 text-[11px] text-slate-500 italic">
                    Quantity : {data.qty} pcs
                  </div>
                </div>

                <div className="m-1 text-sm font-medium text-slate-500">
                  {rupiah.format(data.harga)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChartCard
        data={data}
        user_id={user_id}
        id_product={id_product}
        title={title}
        size={size}
        finalHarga={finalHarga}
        finalqty={finalqty}
        berat={berat}
      />
    </div>
  );
}
