import CustomJersey from "@/components/custom/custom-jersey";
import DeskripsiOwner from "@/components/icons/aboutus/view";
import GosokKupon from "@/components/footer/gosok-kupon";
import ViewFollowUs from "@/components/icons/followus/view";
import ViewYoutube from "@/components/icons/youtube/view";
import ProdukKategori from "@/components/products/product-kategori";
import ProdukTerbaru from "@/components/products/product-terbaru";

export default function Home() {
  return (
    <>
      <ProdukTerbaru />
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
