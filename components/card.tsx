import Image from "next/image";
import { DeleteButton, EditButton } from "@/components/button";
import type { Upload } from "@prisma/client";
import Link from "next/link";

const Card = ({ data }: { data: Upload }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-md shadow">
      <div className="relateive aspect-video">
        <Link href={data.image}>
          <Image
            src={data.image}
            alt={data.title}
            priority
            width={300}
            height={300}
            className="rounded-t-md object-cover w-300 h-auto"
          ></Image>
        </Link>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900 truncate">
          {data.title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Card;
