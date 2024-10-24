import { getData } from "@/components/icons/youtube/data";

export default async function ViewYoutube() {
  const youtube = await getData();
  return (
    <div className="flex justify-center">
      {youtube.map((yt) => (
        <iframe
          key={yt.id}
          className="m-3 rounded-lg w-10/12 h-[200px]"
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
