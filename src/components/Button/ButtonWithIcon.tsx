import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function ButtonWithIcon({
  Icon,
  children,
}: {
  Icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <Button asChild={true}>
      <button>
        <Icon />
        {children}
      </button>
    </Button>
  );
}
