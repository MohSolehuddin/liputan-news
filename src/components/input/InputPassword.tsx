import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function InputPassword({
  label,
  placeholder,
  register,
  error,
}: {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: string | undefined;
}) {
  return (
    <section className="flex flex-col gap-1">
      <Label htmlFor={register?.name}>{label}</Label>
      <section className="relative">
        <Input
          id={register?.name}
          type="password"
          placeholder={placeholder}
          {...(register ?? {})}
        />
        <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2" />
      </section>
      {error && <p className="text-sm font-normal text-red-400">{error}</p>}
    </section>
  );
}
