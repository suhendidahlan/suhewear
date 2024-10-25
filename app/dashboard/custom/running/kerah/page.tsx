import Image from "next/image";
import Link from "next/link";
import { getImagesByCat } from "@/components/custom/kerah/data";
import { DeleteButton } from "@/components/custom/kerah/button";

export default async function Gallery() {
  const images = await getImagesByCat("running");
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-14">
        <div className="flex items-center justify-between mx-10">
          <h1 className="text-2xl font-bold">Kerah List</h1>
          <Link
            href={`/dashboard/custom/create/kerah`}
            className="py-3 px-6 bg-slate-800 hover:bg-slate-500 text-white rounded-md text-xs"
          >
            Upload New Image
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-5">
          {images?.map((item) => (
            <div
              className="max-w-sm border border-gray-200 rounded-md shadow"
              key={item.id}
            >
              <div className="relateive aspect-video">
                <Link href={item.image}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    priority
                    width={300}
                    height={300}
                    className="rounded-t-md object-cover w-300 h-auto"
                  ></Image>
                </Link>
              </div>
              <div className="p-5">
                <h1 className="text-xl font-bold text-gray-900 truncate">
                  {item.title}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={`/dashboard/custom/running/kerah/edit/${item.id}`}
                  className="py-3 text-sm bg-gray-50 rounded-bl-md w-full hover:bg-gray-100 text-center"
                >
                  Edit
                </Link>
                <DeleteButton id={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
