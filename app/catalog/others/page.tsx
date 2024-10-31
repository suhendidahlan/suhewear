import Image from "next/image";
import Link from "next/link";
import { getDataByCat } from "@/components/catalog/data";
import FilterCatalog1 from "@/components/catalog/filter-catalog1";

export default async function CatalogPage() {
  const data = await getDataByCat("others");
  return (
    <div className="mb-10">
      <div className="px-5 py-3 text-slate-800 italic font-bold text-xl">
        Catalog Design by SUHE (Others)
      </div>
      <FilterCatalog1 />
      <div className="flex justify-around items-center">
        <div className="m-2 grid grid-cols-2 laptop:grid-cols-4 max-w-screen">
          {data?.map((img) => (
            <div key={img.id} className="bg-slate-100 m-1">
              <Link href={img.image}>
                <Image
                  src={img.image}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-md laptop:w-[300px]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
