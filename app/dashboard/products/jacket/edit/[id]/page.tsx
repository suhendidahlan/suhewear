import { getImageById } from "@/components/products/data";
import { notFound } from "next/navigation";
import EditFormProduk from "@/components/products/edit-form";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getImageById(params.id);
  if (!data) return notFound;
  return (
    <div className="min-h-screen flex items-center justify-center br-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">upload Image</h1>
        <EditFormProduk data={data} />
      </div>
    </div>
  );
};

export default EditPage;
