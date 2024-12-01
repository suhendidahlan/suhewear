"use client";
import { useFormStatus } from "react-dom";
import { deleteData, deleteDataAdmin } from "@/components/checkout/actions";
import { clsx } from "clsx";

export const ButtonTransaksi = ({ id, label }: { id: any; label: string }) => {
  const { pending } = useFormStatus();
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
    <button
      className={clsx(
        "bg-slate-800 text-white m-2 p-2 w-full text-base rounded-md hover:bg-slate-600",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      onClick={handleSubmit}
      disabled={pending}
    >
      {label === "bayar" ? (
        <div className="">{pending ? "Processing..." : "Bayar"}</div>
      ) : (
        <div className="">{pending ? "Submiting..." : "Next"}</div>
      )}
    </button>
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

export const DeleteButtonAdmin = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteDataAdmin.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="text-sm bg-slate-200 rounded-lg p-2 w-full m-2 text-center"
    >
      <DeleteBtnAdmin />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Canceling..." : "Cancel"}
    </button>
  );
};

const DeleteBtnAdmin = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
