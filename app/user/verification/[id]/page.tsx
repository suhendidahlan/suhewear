import React from "react";
import { notFound } from "next/navigation";
import { getDataById } from "@/components/user/data";
import EditVerif from "@/components/user/edit-form";

const VerificationPage = async ({ params }: { params: { id: string } }) => {
  const data = await getDataById(params.id);
  if (!data) return notFound;

  return (
    <div>
      <div className="text-center my-32">
        <p className="underline font-bold">Verification Final Step</p>
        <p className="text-xs my-4">
          Silahkan klik verif now untuk memverifikasi akun anda!
        </p>
        <EditVerif data={data} />
      </div>
    </div>
  );
};

export default VerificationPage;
