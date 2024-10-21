import { getDataById } from "@/components/icons/aboutus/data";
import { notFound } from "next/navigation";
import EditForm from "@/components/icons/aboutus/edit-form";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getDataById(params.id);
  if (!data) return notFound;
  return (
    <div className="min-h-screen flex items-center justify-center br-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">upload Image</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
