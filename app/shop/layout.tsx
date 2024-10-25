import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUHE Store",
  description:
    "SUHE Activewear Apparel Store. Menjual berbagai macam produk perlengkapan sport",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
