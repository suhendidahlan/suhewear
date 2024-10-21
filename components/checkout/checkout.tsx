import { produk } from "@prisma/client";
import React, { useState } from "react";

const Checkout = ({ data }: { data: produk }) => {
  const checkout = async () => {
    const dataBase = {
      id: data.id,
      productName: data.title,
      price: data.harga,
      quantity: 1,
    };

    const response = await fetch("../../api/tokenizer", {
      method: "POST",
      body: JSON.stringify(dataBase),
    });

    const requestData = await response.json();
    console.log({ requestData });
    window.snap.pay(requestData.token);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Checkout;
