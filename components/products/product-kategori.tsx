import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ProdukKategori = () => {
  return (
    <>
      <div className="px-6 py-2 text-lg font-bold mt-4">PRODUCT CATEGORIES</div>
      <div className="flex justify-center">
        <div className="mx-2 grid grid-cols-2 ">
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/shop/jersey`}>
                <Image
                  className="rounded-md"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/shop/jersey`}>Sport Jersey</Link>
              <Link href={`/shop/jersey`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/shop/tshirt`}>
                <Image
                  className="rounded-md"
                  src="/suhe kaos 2.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/shop/tshirt`}>T-Shirt</Link>
              <Link href={`/shop/tshirt`}>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          {/* <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/shop/jacket`}>
                <Image
                  className="rounded-md"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/shop/jacket`}>Jacket</Link>
              <Link href={`/shop/jacket`}>
                <FiArrowRight />
              </Link>
            </div>
          </div> */}
          {/* <div className="m-0.5 block text-center rounded-md">
            <div className="p-2">
              <Link href={`/shop/accessories`}>
                <Image
                  className="rounded-md"
                  src="/Sport activewear.jpg"
                  alt=""
                  width={160}
                  height={200}
                />
              </Link>
            </div>
            <div className="py-1 px-2 text-[16px] font-medium flex justify-around items-center italic">
              <Link href={`/shop/accessories`}>Accessories</Link>
              <Link href={`/shop/accessories`}>
                <FiArrowRight />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProdukKategori;
