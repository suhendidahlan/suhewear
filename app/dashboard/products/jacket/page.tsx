import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteButton } from "@/components/products/button";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const getData = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
      where: { kategori: "jacket" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export default async function ProductsAdmin() {
  const images = await getData();
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-14">
        <div className="flex items-center justify-between mx-10">
          <h1 className="text-2xl font-bold">Products List (Jacket)</h1>
          <Link
            href={`/dashboard/products/create`}
            className="py-3 px-6 bg-slate-800 hover:bg-slate-500 text-white rounded-md text-xs"
          >
            Upload New Image
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-5">
          {images.map((item) => (
            <div
              className="max-w-sm border border-gray-200 rounded-md shadow"
              key={item.id}
            >
              <div className="relateive aspect-video">
                <Link href={item.image1}>
                  <Image
                    src={item.image1}
                    alt={item.title}
                    priority
                    width={300}
                    height={300}
                    className="rounded-t-md object-cover w-300 h-auto"
                  ></Image>
                </Link>
              </div>
              <div className="p-5">
                <h1 className="text-xs font-bold text-gray-900">
                  {item.title}
                </h1>
                <p className="text-md font-bold text-slate-500 py-1">
                  {rupiah.format(item.harga)}
                </p>
                <p className="text-xs font-bold text-slate-500 py-1 italic">
                  Jenis : {item.jenis}
                </p>
                <p className="text-xs font-bold text-slate-500 py-1">
                  (XS : {item.size_xs}), (S : {item.size_s}), (M :{item.size_m}
                  ), ( L : {item.size_l} ), ( XL :{item.size_xl}), (2XL :
                  {item.size_xxl}), (3XL :{item.size_xxxl})
                </p>
                <p className="text-xs font-bold text-slate-500 py-1 italic">
                  Sub : {item.sub1}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={`/dashboard/products/jacket/edit/${item.id}`}
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
