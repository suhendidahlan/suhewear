import Link from "next/link";

const GosokKupon = () => {
  return (
    <>
      <div className="m-5 text-center p-4 bg-slate-800 text-white">
        <p className="text-2xl font-bold my-4">PUNYA KUPON ?</p>
        <div className="mb-3 mt-1 text-white text-[13px] p-2 rounded-md text-center mx-28 border">
          <Link href="">Gosok Di Sini</Link>
        </div>
        <p className="text-[11px] text-slate-300 font-light italic mb-4">
          Dapatkan kode kupon pada setiap pembelian produk atau custom jersey
          tertentu di SUHE Activewear Apparel. Semoga beruntung !
        </p>
      </div>
    </>
  );
};

export default GosokKupon;
