"use client";
import { updateData } from "@/components/icons/aboutus/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/icons/aboutus/button";
import type { aboutus } from "@prisma/client";

const EditForm = ({ data }: { data: aboutus }) => {
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
        <input
          type="text"
          name="isi"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="Isi..."
          defaultValue={data.isi}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.isi}</p>
        </div>
      </div>

      <div className="mb-4 pt-4">
        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default EditForm;
