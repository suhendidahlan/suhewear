import NavbarAdmin1 from "@/components/navbar/navbar-admin1";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

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
