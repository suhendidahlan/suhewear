import { getData } from "@/components/icons/youtube/data";

export default async function ViewYoutube() {
  const youtube = await getData();
  return (
    <div className="grid grid-cols-1 mx-6 laptop:grid-cols-2 laptop:gap-5">
      {youtube.map((yt) => (
        <iframe
          key={yt.id}
          className="my-2 rounded-lg w-full h-[200px] tablet:h-[430px] laptop:h-[360px]"
          width="560"
          height="290"
          src={`${yt.kode}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ))}
    </div>
  );
}
