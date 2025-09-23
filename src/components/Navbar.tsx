import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const navbarVariants = cva("fixed top-0 z-10 w-full flex justify-between", {
  variants: {
    variant: {
      default: "",
      whiteBackground: "bg-white",
    },
    size: {
      default: "px-[60px] py-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Navbar({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"nav"> & VariantProps<typeof navbarVariants>) {
  const logoSrc =
    variant === "whiteBackground" ? "/logo.svg" : "/assets/logo-white.svg";
  const textStyle =
    variant === "whiteBackground" ? "text-slate-900" : "text-white";

  return (
    <nav className={cn(navbarVariants({ variant, size, className }))}>
      <img src={logoSrc} alt="" />
      <a
        href="/profile"
        id="user-profile"
        className="flex items-center gap-[6px]">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-center">
          J
        </div>
        <p className={cn("text-base font-medium underline", textStyle)}>
          James Dean
        </p>
      </a>
    </nav>
  );
}

export { Navbar, navbarVariants };
