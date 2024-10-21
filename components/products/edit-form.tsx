"use client";
import { updateData } from "@/components/products/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/products/button";
import type { produk } from "@prisma/client";

const EditFormProduk = ({ data }: { data: produk }) => {
  const [state, formAction] = useFormState(
    updateData.bind(null, data.id),
    null
  );
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Title..."
          defaultValue={data.title}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <select
          name="jenis"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          defaultValue={data.jenis}
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
          defaultValue={data.kategori}
        >
          <option value="jersey">Jersey</option>
          <option value="pants">Pants</option>
          <option value="tshirt">T-Shirt</option>
          <option value="jacket">Jacket</option>
          <option value="equipments">Equipments</option>
          <option value="accessories">Accessories</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.kategori}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="sub1"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="sub-kategori..."
          defaultValue={data.sub1}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.sub1}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="sub2"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="sub-kategori..."
          defaultValue={data.sub2}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.sub2}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="sub3"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="sub-kategori..."
          defaultValue={data.sub3}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.sub3}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="berat"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Berat Produk..."
          defaultValue={data.berat}
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
          defaultValue={data.size_xs}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_xs}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_s"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_s..."
          defaultValue={data.size_s}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_s}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_m"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_m..."
          defaultValue={data.size_m}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_m}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_l"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_L..."
          defaultValue={data.size_l}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_l}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_xl"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_xl..."
          defaultValue={data.size_xl}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_xl}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_xxl"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_xxl..."
          defaultValue={data.size_xxl}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_xxl}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="size_xxxl"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Size_xxxl..."
          defaultValue={data.size_xxxl}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.size_xxxl}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="harga"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="harga..."
          defaultValue={data.harga}
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
          defaultValue={data.deskripsi}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.deskripsi}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <label htmlFor="">Status :</label>
        <select name="status" className="p-2 mx-2">
          <option selected value={data.status}>
            {data.status}
          </option>
          <option value="on sale">On Sale</option>
          <option value="sold out">Sold Out</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.status}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <label htmlFor="">Disc Label :</label>
        <input
          type="text"
          name="disc_label"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Disc Label..."
          defaultValue={data.disc_label}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.disc_label}
          </p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="harga_disc"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="status..."
          defaultValue={data.harga_disc}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.harga_disc}
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
          <p className="text-sm text-red-500 mt-2">{state?.error?.image1}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image2"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image2}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image3"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image3}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default EditFormProduk;
