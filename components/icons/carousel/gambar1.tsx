import { prisma } from "@/lib/prisma";
import Image from "next/image";

const getData = async () => {
  try {
    const result = await prisma.carousel.findMany({
      where: { title: "gambar 1" },
      take: 1,
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export default async function Gambar1() {
  const images = await getData();
  return (
    <div>
      {images.map((data) => (
        <div
          key={data.id}
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <Image
            src={data.image}
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
      ))}
    </div>
  );
}
