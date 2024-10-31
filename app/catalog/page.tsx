import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FilterCatalog1 from "@/components/catalog/filter-catalog1";

const getData = async () => {
  try {
    const result = await prisma.catalog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export default async function CatalogPage() {
  const data = await getData();
  return (
    <div className="mb-10">
      <div className="px-5 py-3 text-slate-800 italic font-bold text-xl">
        Catalog List by SUHE
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
