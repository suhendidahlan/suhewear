"use client";
import { useFormState } from "react-dom";
import { storeData } from "@/components/gallery/actions";
import { SubmitButton } from "@/components/gallery/button";

const CreateGallery = () => {
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
              name="kategori"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            >
              <option value="sporty">Sporty</option>
              <option value="casual">Casual</option>
              <option value="team">Team</option>
              <option value="lainnya">Lainnya</option>
            </select>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.kategori}
              </p>
            </div>
          </div>
          <div className="mb-4 pt-2">
            <input
              type="text"
              name="sub"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Sub-Kategori..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.sub}</p>
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
            <SubmitButton label="upload" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGallery;
