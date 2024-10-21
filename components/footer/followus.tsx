import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const FollowUs = () => {
  return (
    <>
      <div className="px-6 py-2 text-xl font-bold mt-4 italic flex justify-between items-center">
        <p>Follow Us on Instagram</p>
        <Link href="">
          <FiArrowRight />
        </Link>
      </div>
      <div className="mx-2 container flex overflow-x-scroll min-w-full">
        <div className="m-0.5 block text-center min-w-40 rounded-md">
          <div className="p-2">
            <Link href="">
              <Image
                className="rounded-md"
                src="/suhe classic pink blue.jpg"
                alt=""
                width={180}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="m-0.5 block text-center min-w-40 rounded-md">
          <div className="p-2">
            <Link href="">
              <Image
                className="rounded-md"
                src="/suhe classic pink blue.jpg"
                alt=""
                width={180}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="m-0.5 block text-center min-w-40 rounded-md">
          <div className="p-2">
            <Link href="">
              <Image
                className="rounded-md"
                src="/suhe classic pink blue.jpg"
                alt=""
                width={180}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
