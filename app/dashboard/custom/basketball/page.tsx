import Link from "next/link";
import { CiShirt } from "react-icons/ci";
import { GiPoloShirt } from "react-icons/gi";
import { IoLogoUsd } from "react-icons/io";
import { SlSizeActual } from "react-icons/sl";

export default function CustomAdmin() {
  return (
    <div className="mb-10">
      <div className="px-8 py-3 text-slate-800 italic font-bold text-xl">
        SUHE Apparel Admin
      </div>
      <div className="grid grid-cols-4 mx-8">
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/custom/basketball/pola`}
        >
          <CiShirt size={30} />
          <p>Pola</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={`/dashboard/custom/basketball/kerah`}
        >
          <GiPoloShirt size={30} />
          <p>Kerah</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={``}
        >
          <IoLogoUsd size={30} />
          <p>Harga</p>
        </Link>
        <Link
          className="bg-slate-200 m-2 p-2 text-xs font-bold italic rounded-md"
          href={``}
        >
          <SlSizeActual size={30} />
          <p>Size</p>
        </Link>
      </div>
    </div>
  );
}
