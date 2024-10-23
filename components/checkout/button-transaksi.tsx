"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import { deleteData } from "@/components/checkout/actions";
import type { trsingle } from "@prisma/client";
import { getDataById } from "@/components/checkout/data";

export const ButtonTransaksi = ({ id }: { id: any }) => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    // const produk = await getDataById(id);

    const newItem = {
      id: id.id,
      harga: id.total,
      qty: 1,
      nama: id.nama,
      email: id.email,
      wa: id.wa,
      kurir: id.kurir,
      hp: id.hp,
      alamat: id.alamat_kirim,
      city: id.city,
    };

    console.log(newItem);

    const response = await fetch("/api/gateway", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const requestData = await response.json();
    console.log({ requestData });
    window.snap.pay(requestData.token);
  }
  return (
    <div
      className="text-sm text-white bg-slate-700 rounded-lg p-2 w-full m-2 text-center cursor-pointer"
      onClick={handleSubmit}
    >
      Bayar
    </div>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteData.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="text-sm bg-slate-200 rounded-lg p-2 w-full m-2 text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Cancel"}
    </button>
  );
};
