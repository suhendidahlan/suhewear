import { getImageById } from "@/components/products/data";
import { notFound } from "next/navigation";
import Script from "next/script";
import { auth } from "@/auth";
import BuyNowCardUser from "@/components/products/buy-now-card-user";
import { getDataById } from "@/components/user/data";

export default async function BuyNowPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getImageById(params.id);
  if (!data) return notFound;
  const session = await auth();
  const id: any = session?.user.id;
  const disc_user = await getDataById(id);
  const diskon: any = disc_user?.diskon;
  const kredit: any = disc_user?.kredit;

  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <BuyNowCardUser
        data={data}
        user_id={id}
        diskon={diskon}
        kredit={kredit}
      />
    </div>
  );
}
