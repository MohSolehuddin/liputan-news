"use client";
import { cn } from "@/lib/utils";
import { LogOut, LucideIcon, Newspaper, Tag } from "lucide-react";
import { usePathname } from "next/navigation";

type ItemListProps = {
  title: string;
  link: string;
  Icon: LucideIcon;
  active?: boolean;
};
const ItemList = ({ title, link, active = false, Icon }: ItemListProps) => {
  return (
    <li
      className={`flex gap-3 items-center h-10 pl-4 ${
        active && "bg-blue-500 rounded-[6px]"
      }`}>
      <Icon style={{ opacity: 1, height: 20, width: 20, color: "white" }} />
      <a href={link}>{title}</a>
    </li>
  );
};

export default function SideBar({ className }: React.ComponentProps<"aside">) {
  const pathName = usePathname();
  return (
    <aside
      className={cn(
        "bg-primary flex border border-r border-primary pt-[20px] pb-4 gap-4",
        className
      )}>
      <nav className="w-full flex flex-col gap-6">
        <img src="/assets/logo-white.svg" className="px-8 h-8" alt="Logo" />
        <section className="px-4">
          <ul className="w-full flex flex-col gap-2 text-base font-medium text-white">
            <ItemList
              title="Articles"
              link="/admin"
              Icon={Newspaper}
              active={pathName === "/admin"}
            />
            <ItemList
              title="Category"
              link="/admin/category"
              Icon={Tag}
              active={pathName === "/admin/category"}
            />
            <ItemList title="Logout" link="#" Icon={LogOut} />
          </ul>
        </section>
      </nav>
    </aside>
  );
}
