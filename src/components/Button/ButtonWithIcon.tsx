import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function ButtonWithIcon({
  Icon,
  children,
  ...props
}: {
  Icon: LucideIcon;
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>) {
  return (
    <Button asChild={true} {...props}>
      <button>
        <Icon
          style={{
            color: "white",
            opacity: 1,
            height: 20,
            width: 20,
          }}
        />
        {children}
      </button>
    </Button>
  );
}
