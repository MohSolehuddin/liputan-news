"use client";
import { Navbar } from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import pathNameFormatter from "@/lib/utils/pathNameFormatter";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <main className="overflow-y-hidden absolute w-full">
      <section className="h-screen w-full grid grid-rows-[auto_1fr] grid-cols-[267px_1fr]">
        <SideBar className="row-span-2" pathName={pathName} />
        <Navbar
          className="col-start-2 row-start-1"
          variant="admin"
          size="sm"
          position="none"
          pageName={
            pathName.length > 7 ? pathNameFormatter(pathName) : undefined
          }
        />
        <section className="col-start-2 row-start-2 overflow-y-scroll px-6 pt-6">
          {children}
        </section>
      </section>
    </main>
  );
}
