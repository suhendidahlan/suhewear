import NavbarAdmin1 from "@/components/navbar/navbar-admin1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUHE Apparel | Dashboard Admin",
  description: "SUHE Activewear Apparel Admin Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarAdmin1 />
      <br className="mt-14" />
      {children}
    </div>
  );
}
