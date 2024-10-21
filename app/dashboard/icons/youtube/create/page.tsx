"use client";
import { useFormState } from "react-dom";
import { storeData } from "@/components/icons/youtube/actions";
import { SubmitButton } from "@/components/icons/youtube/button";

const CreateYoutube = () => {
  const [state, formAction] = useFormState(storeData, null);
  return (
    <div className="min-h-screen flex items-center justify-center br-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">Upload Video</h1>
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
            <input
              type="text"
              name="kode"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Kode..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.kode}</p>
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

export default CreateYoutube;
