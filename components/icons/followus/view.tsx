import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const getData = async () => {
  try {
    const result = await prisma.followus.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

const CardFollowUs = async () => {
  const data = await getData();
  return (
    <>
      <div className="px-6 py-2 text-xl font-bold mt-4 italic flex justify-between items-center">
        <p>Follow Us on Instagram</p>
        <Link href={`https://www.instagram.com/suhe.apparel/`}>
          <FiArrowRight />
        </Link>
      </div>
      <div className="mx-2 flex overflow-x-scroll items-center">
        {data.map((ig) => (
          <div
            className="m-0.5 block text-center min-w-40 rounded-md"
            key={ig.id}
          >
            <div className="p-1">
              <Link href={`https://www.instagram.com/suhe.apparel/`}>
                <Image
                  className="rounded-md"
                  src={ig.image}
                  alt={ig.title}
                  width={180}
                  height={200}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardFollowUs;
