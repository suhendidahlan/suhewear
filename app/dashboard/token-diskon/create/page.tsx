"use client";
import React from "react";
import { useFormState } from "react-dom";
import { storeData } from "@/components/token-diskon/actions";
import { SubmitButton } from "@/components/token-diskon/button";

const TokenDiskonPage = () => {
  const [state, formAction] = useFormState(storeData, null);
  return (
    <div className="">
      <form action={formAction}>
        <div className="mx-4 mt-2 mb-6">
          <div className="text-xl font-bold my-3 border-b">
            Create Token Diskon
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Token :</div>
            <input
              type="text"
              name="token"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Input Token..."
            />
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Kategori :</div>
            <select name="kategori">
              <option value="percent">Percent</option>
              <option value="nominal">Nominal</option>
              <option value="poin">Poin</option>
              <option value="product">Product</option>
            </select>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Qty :</div>
            <input
              type="number"
              name="jumlah"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Jumlah Token..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Percent :</div>
            <input
              type="number"
              name="percent"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Persentase..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.percent}
              </p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Nominal :</div>
            <input
              type="number"
              name="nominal"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Nominal..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.nominal}
              </p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Poin :</div>
            <input
              type="number"
              name="poin"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Poin..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.poin}</p>
            </div>
          </div>
          <div className="mx-2 my-3">
            <div className="text-sm mx-2 my-1">Product :</div>
            <input
              type="text"
              name="product"
              className="py-2 px-4 text-sm rounded-md border border-gray-400 w-full"
              placeholder="Product..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.product}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 m-8">
          <SubmitButton label="upload" />
        </div>
      </form>
    </div>
  );
};

export default TokenDiskonPage;
