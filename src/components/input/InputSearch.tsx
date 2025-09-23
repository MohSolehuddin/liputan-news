import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function InputSearch() {
  return (
    <section className="relative max-sm:w-full">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
        style={{ opacity: 1 }}
      />
      <Input
        placeholder="Search articles"
        className="w-full sm:w-[400px] h-10 pl-8 bg-white text-slate-400 text-sm font-normal rounded-md"
      />
    </section>
  );
}
