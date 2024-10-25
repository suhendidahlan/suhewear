import Image from "next/image";
import Link from "next/link";
import { getDataByCat } from "@/components/gallery/data";
import FilterGallery1 from "@/components/gallery/filter-gallery1";

export default async function GalleryPage() {
  const data = await getDataByCat("casual");
  return (
    <div className="mb-10">
      <div className="px-5 py-3 text-slate-800 italic font-bold text-xl">
        Gallery Casual by SUHE
      </div>
      <FilterGallery1 />
      <div className="flex justify-around items-center">
        <div className="m-2 grid grid-cols-2 max-w-screen">
          {data?.map((img) => (
            <div key={img.id} className="bg-slate-100 m-1">
              <Link href={img.image}>
                <Image
                  src={img.image}
                  alt=""
                  width={170}
                  height={100}
                  className="rounded-md"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
