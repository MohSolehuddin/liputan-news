import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
type Option = string | { label: string; value: string };

const selectWithoutLabelVariants = cva(
  "w-full rounded-md text-sm font-normal bg-white border border-slate-200 px-3 py-2",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "sm:w-[180px] min-h-10 h-10",
        sm: "w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function SelectCategory({
  placeholder,
  options = [],
  variant,
  size,
  className,
}: VariantProps<typeof selectWithoutLabelVariants> & {
  placeholder: string;
  options?: Option[];
  className?: string;
}) {
  return (
    <Select>
      <SelectTrigger
        className={cn(
          selectWithoutLabelVariants({
            variant,
            size,
            className,
          })
        )}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          if (typeof option === "string") {
            return (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            );
          }
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
