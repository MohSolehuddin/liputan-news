import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";

export default function InputPassword({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <section className="flex flex-col gap-1">
      <Label>{label}</Label>
      <section className="relative">
        <Input type="password" placeholder={placeholder} />
        <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2" />
      </section>
    </section>
  );
}
