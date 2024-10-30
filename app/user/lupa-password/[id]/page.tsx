import FormEditPassword from "@/components/user/edit-password";
import React from "react";
import { notFound } from "next/navigation";
import { getDataById } from "@/components/user/data";

const EditPasswordAkun = async ({ params }: { params: { id: string } }) => {
  const data = await getDataById(params.id);
  if (!data) return notFound;
  return (
    <>
      <FormEditPassword data={data} />
    </>
  );
};

export default EditPasswordAkun;
