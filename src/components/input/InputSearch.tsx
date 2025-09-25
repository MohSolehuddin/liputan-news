import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Search } from "lucide-react";

const variantInputSearch = cva(
  "bg-white text-slate-400 text-sm font-normal rounded-md",
  {
    variants: {
      size: {
        default: "w-full sm:w-[400px] h-10 pl-8",
        sm: "w-full sm:w-[240px] h-9 pl-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export default function InputSearch({
  className,
  size,
  placeholder = "Search articles",
}: { className?: string; placeholder?: string } & VariantProps<
  typeof variantInputSearch
>) {
  return (
    <section className="relative max-sm:w-full">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
        style={{ opacity: 1 }}
      />
      <Input
        placeholder={placeholder}
        className={cn(variantInputSearch({ size }), className)}
      />
    </section>
  );
}
