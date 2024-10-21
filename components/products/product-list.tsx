import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const getData = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

const ProdukTerbaru = async () => {
  const images = await getData();
  return (
    <>
      {/* <div className="px-4 py-2 text-xl font-bold mt-4">
        NEW PRODUCTS ARIVAL
      </div> */}
      <div className="mx-2 container flex overflow-x-scroll min-w-full">
        {images.map((data) => (
          <div
            className="m-0.5 block text-center min-w-40 rounded-md"
            key={data.id}
          >
            <div className="p-2">
              <Link href="">
                <Image
                  className="rounded-md"
                  src={data.image1}
                  alt={data.title}
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[13px] font-bold max-w-40">
              <Link href="">{data.title}</Link>
            </div>
            <div className="mb-4 py-0.5 px-2 text-[15px] font-light">
              {rupiah.format(data.harga)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProdukTerbaru;
