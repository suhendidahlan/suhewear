import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getData } from "@/components/icons/followus/data";

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
                  className="rounded-md laptop:w-[300px]"
                  src={ig.image}
                  alt={ig.title}
                  width={300}
                  height={300}
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
