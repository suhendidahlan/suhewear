import { getData } from "@/components/icons/aboutus/data";

const DeskripsiOwner = async () => {
  const deskripsi = await getData();
  return (
    <div className="bg-slate-100 text-center p-8 ">
      {deskripsi.map((data) => (
        <div key={data.id}>
          <p className="text-[18px] font-bold my-4 text-slate-800">
            {data.title}
          </p>
          <p className="text-[13px] text-slate-500">{data.isi}</p>
        </div>
      ))}
    </div>
  );
};

export default DeskripsiOwner;
