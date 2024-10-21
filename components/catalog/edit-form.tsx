"use client";
import { updateData } from "@/components/catalog/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/catalog/button";
import type { catalog } from "@prisma/client";

const EditForm = ({ data }: { data: catalog }) => {
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
          name="pola"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          defaultValue={data.pola}
        >
          <option value="standar">Standar</option>
          <option value="raglan">Raglan</option>
          <option value="variasi">Variasi</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <select
          name="kerah"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          defaultValue={data.kerah}
        >
          <option value="v_neck">V-Neck</option>
          <option value="o_neck">O-Neck</option>
          <option value="kerah">Kerah</option>
        </select>
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
          <option value="full">Full Print</option>
          <option value="half">Half Print</option>
          <option value="non">Non-Print</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <select
          name="kategori"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          defaultValue={data.kategori}
        >
          <option value="soccer">SOCCER</option>
          <option value="basketball">BASKETBALL</option>
          <option value="badminton">BADMINTON</option>
          <option value="volleyball">VOLLEYBALL</option>
          <option value="running">RUNNING</option>
          <option value="others">OTHERS</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.kategori}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default EditForm;
