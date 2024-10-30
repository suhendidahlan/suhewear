import NavbarAdmin1 from "@/components/navbar/navbar-admin1";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SUHE Apparel | Dashboard Admin",
  description: "SUHE Activewear Apparel Admin Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "admin") redirect("/");
  return (
    <div>
      <NavbarAdmin1 />
      <br className="mt-14" />
      {children}
    </div>
  );
}
