import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Jersey by SUHE",
  description:
    "SUHE Activewear Apparel Custom. Melayani pembuatan jersey custom olahraga",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
