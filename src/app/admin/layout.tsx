"use client";
import { Navbar } from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full grid grid-rows-[auto_1fr] grid-cols-[267px_1fr]">
      <SideBar className="row-span-2" />
      <Navbar
        className="col-start-2 row-start-1"
        variant="admin"
        size="sm"
        position="none"
      />
      <section className="col-start-2 row-start-2 overflow-y-scroll px-6 pt-6">
        {children}
      </section>
    </main>
  );
}
