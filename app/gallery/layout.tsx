import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery by SUHE",
  description:
    "SUHE Activewear Apparel Gallery. Menampilkan gambar-gambar hasil produk SUHE Apparel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
