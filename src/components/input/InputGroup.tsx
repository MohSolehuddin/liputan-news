import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputGroup({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <section className="flex flex-col gap-1">
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </section>
  );
}
