import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UseFormRegisterReturn } from "react-hook-form";
export default function InputGroup({
  label,
  placeholder,
  register,
  error,
  props,
}: {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: string | undefined;
  props?: React.ComponentProps<"input">;
}) {
  return (
    <section className="flex flex-col gap-1">
      <Label htmlFor={register?.name}>{label}</Label>
      <Input
        id={register?.name}
        placeholder={placeholder}
        {...(register ?? {})}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </section>
  );
}
