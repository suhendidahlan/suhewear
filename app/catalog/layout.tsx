import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog Design by SUHE",
  description:
    "SUHE Activewear Apparel Catalog. Referensi gambar design jersey dari SUHE Apparel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
