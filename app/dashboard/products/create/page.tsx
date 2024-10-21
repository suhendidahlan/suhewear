"use client";
import { useFormState } from "react-dom";
import { storeData } from "@/components/products/actions";
import { SubmitButton } from "@/components/products/button";

const CreateProduct = () => {
  const [state, formAction] = useFormState(storeData, null);
  return (
    <div className="min-h-screen flex items-center justify-center br-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">upload Image</h1>
        <form action={formAction}>
          <div className="mb-4 pt-2">
            <input
              type="text"
              name="title"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Title..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <select
              name="jenis"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            >
              <option value="sporty">Sporty</option>
              <option value="casual">Casual</option>
              <option value="lainnya">Lainya</option>
            </select>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.jenis}</p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <select
              name="kategori"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            >
              <option value="jersey">Jersey</option>
              <option value="pants">Pants</option>
              <option value="tshirt">T-Shirt</option>
              <option value="jacket">Jacket</option>
              <option value="equipments">Equipments</option>
              <option value="accessories">Accessories</option>
            </select>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.kategori}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="berat"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Berat Produk..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.berat}</p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_xs"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_xs..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_xs}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_s"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_s..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_s}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_m"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_m..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_m}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_l"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_L..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_l}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_xl"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_xl..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_xl}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_xxl"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_xxl..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_xxl}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="size_xxxl"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Size_xxxl..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.size_xxxl}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="number"
              name="harga"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="harga..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.harga}</p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="text"
              name="deskripsi"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="deskripsi..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.deskripsi}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="file"
              name="image1"
              className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.image1}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="file"
              name="image2"
              className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.image2}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="file"
              name="image3"
              className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.image3}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-4">
            <SubmitButton label="upload" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
