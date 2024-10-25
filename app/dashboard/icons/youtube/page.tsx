import Link from "next/link";
import { getData } from "@/components/icons/youtube/data";
import { DeleteButton } from "@/components/icons/youtube/button";

export default async function Youtube() {
  const youtube = await getData();
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-14">
        <div className="flex items-center justify-between mx-10">
          <h1 className="text-2xl font-bold">Youtube</h1>
          <Link
            href="/dashboard/icons/youtube/create"
            className="py-3 px-6 bg-slate-800 hover:bg-slate-500 text-white rounded-md text-xs"
          >
            Upload New Video
          </Link>
        </div>
        <div className="md:grid-cols-3 gap-5 mt-10 mx-5">
          {youtube.map((item) => (
            <div
              className="max-w-sm border border-gray-200 rounded-md shadow"
              key={item.id}
            >
              <div className="relateive aspect-video flex justify-center">
                <iframe
                  width="560"
                  height="315"
                  src={`${item.kode}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="p-5 text-center">
                <h1 className="text-xl font-bold text-gray-900 truncate">
                  {item.title}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={`/dashboard/icons/youtube/edit/${item.id}`}
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
