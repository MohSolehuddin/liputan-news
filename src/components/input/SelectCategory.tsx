import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Option = string | { label: string; value: string };

export default function SelectCategory({
  placeholder,
  options = [],
}: {
  placeholder: string;
  options?: Option[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-full sm:w-[180px] min-h-10 h-10 rounded-md text-sm font-normal bg-white border border-slate-200 px-3 py-2">
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
            <SelectItem
              className="h-10"
              key={option.value}
              value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>{" "}
    </Select>
  );
}
