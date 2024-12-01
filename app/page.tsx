import CustomJersey from "@/components/custom/custom-jersey";
import DeskripsiOwner from "@/components/icons/aboutus/view";
import GosokKupon from "@/components/footer/gosok-kupon";
import ViewFollowUs from "@/components/icons/followus/view";
import ViewYoutube from "@/components/icons/youtube/view";
import ProdukKategori from "@/components/products/product-kategori";
import ProdukKategoriJersey from "@/components/products/product-terbaru-jersey";
import ProdukTerbaru from "@/components/products/product-terbaru";
import Slide2 from "@/components/icons/carousel/slide2";

export default function Home() {
  return (
    <>
      <Slide2 />
      <ProdukTerbaru />
      <ProdukKategoriJersey />
      <ProdukKategori />
      <br />
      <CustomJersey />
      <ViewFollowUs />
      <GosokKupon />
      <ViewYoutube />
      <br />
      <DeskripsiOwner />
    </>
  );
}
