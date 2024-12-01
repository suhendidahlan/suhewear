import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GosokKupon from "@/components/token-diskon/gosok";

const GosokKuponPage = async () => {
  const session: any = await auth();
  if (!session || !session.user) redirect("/");
  const user_id = session.user.id;
  return (
    <div className="mt-20 my-48">
      <GosokKupon user_id={user_id} />
    </div>
  );
};

export default GosokKuponPage;
