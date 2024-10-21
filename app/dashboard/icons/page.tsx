import Link from "next/link";

const IconsPage = () => {
  return (
    <>
      <div className="">
        <ul>
          <Link href={`/dashboard/icons/followus`}>Follow Us</Link>
        </ul>
        <ul>
          <Link href="/dashboard/icons/youtube">Youtube Icons</Link>
        </ul>
        <ul>
          <Link href="/dashboard/icons/aboutus">Deskripsi Owner</Link>
        </ul>
        <ul>
          <Link href="/dashboard/icons/carousel">Carousel</Link>
        </ul>
      </div>
    </>
  );
};

export default IconsPage;
