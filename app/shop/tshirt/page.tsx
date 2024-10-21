import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import FilterStore from "@/components/products/filter-store";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const getData = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
      where: { kategori: "tshirt" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

const ShopTshirtPage = async () => {
  const produk = await getData();
  return (
    <>
      <div className="px-8 py-2 text-xl font-bold mt-4">T-SHIRT by SUHE</div>
      <FilterStore />
      <div className="container grid grid-cols-2 max-w-full my-4">
        {produk.map((data) => (
          <div className="m-0.5 block text-center rounded-md" key={data.id}>
            <div className="p-2 flex justify-center">
              {data.status === "sold out" ? (
                <div>
                  <div className="bg-slate-700 text-white text-xs rounded-lg absolute p-1.5 italic">
                    sold out
                  </div>
                  <div>
                    <Image
                      className="rounded-md opacity-50 grayscale"
                      src={data.image1}
                      alt={data.title}
                      width={160}
                      height={200}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {data.disc_label === "no" ? (
                    <div>
                      <Link href={`products/${data.id}`}>
                        <Image
                          className="rounded-md"
                          src={data.image1}
                          alt={data.title}
                          width={160}
                          height={200}
                        />
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-green-700 text-white text-xs rounded-lg absolute p-1.5 italic">
                        {data.disc_label}
                      </div>
                      <Link href={`products/${data.id}`}>
                        <Image
                          className="rounded-md"
                          src={data.image1}
                          alt={data.title}
                          width={160}
                          height={200}
                        />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="py-1 px-2 text-[13px] font-bold">
              {data.status === "sold out" ? (
                <div>{data.title}</div>
              ) : (
                <Link href={`products/${data.id}`}>{data.title}</Link>
              )}
            </div>
            {data.harga_disc > 0 ? (
              <div className="flex justify-around items-center mb-4 py-0.5 px-2">
                <div
                  className="text-xs font-light"
                  style={{ textDecoration: "line-through" }}
                >
                  {rupiah.format(data.harga_disc)}
                </div>
                <div className="text-sm font-normal">
                  {rupiah.format(data.harga)}
                </div>
              </div>
            ) : (
              <div className="mb-4 py-0.5 px-2 text-sm font-normal">
                {rupiah.format(data.harga)}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopTshirtPage;
