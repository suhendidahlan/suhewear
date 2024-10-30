import Link from "next/link";
import { FaInstagram, FaYoutube, FaUserCircle } from "react-icons/fa";
import { BiCarousel } from "react-icons/bi";

const IconsPage = () => {
  return (
    <div className="mb-10">
      <div className="mx-8 font-bold text-xl underline">ICONS LIST</div>
      <div className="grid grid-cols-4 mx-8">
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/icons/followus`}
        >
          <FaInstagram size={30} />
          <p>Follow us</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/icons/youtube`}
        >
          <FaYoutube size={30} />
          <p>Youtube</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/icons/aboutus`}
        >
          <FaUserCircle size={30} />
          <p>Desc</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/icons/carousel`}
        >
          <BiCarousel size={30} />
          <p>Carousel</p>
        </Link>
      </div>
    </div>
  );
};

export default IconsPage;
