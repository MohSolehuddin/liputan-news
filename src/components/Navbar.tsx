import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const navbarVariants = cva("w-full flex justify-between", {
  variants: {
    variant: {
      default: "bg-white sm:bg-transparent",
      whiteBackground: "bg-white border border-b border-slate-200",
    },
    size: {
      default: "px-[20px] py-3 sm:px-[60px] sm:py-8",
    },
    position: {
      fixed: "fixed top-0 z-10",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    position: "fixed",
  },
});

type navbarProps = {
  username?: string;
};

function Navbar({
  className,
  variant,
  size,
  position,
  username = "James Dean",
  ...props
}: React.ComponentProps<"nav"> &
  VariantProps<typeof navbarVariants> &
  navbarProps) {
  const logoSrc =
    variant === "whiteBackground" ? "/logo.svg" : "/assets/logo-white.svg";
  const textStyle =
    variant === "whiteBackground" ? "text-slate-900" : "text-white";

  return (
    <nav
      className={cn(navbarVariants({ variant, size, position, className }))}
      {...props}>
      <img src={logoSrc} className="max-sm:hidden" alt="logo" />
      <img src="/logo.svg" className="sm:hidden" alt="logo" />
      <a
        href="/profile"
        id="user-profile"
        className="flex items-center gap-[6px]">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-center">
          {username.slice(0, 1).toUpperCase()}
        </div>
        <p
          className={cn(
            "text-base max-sm:hidden font-medium underline",
            textStyle
          )}>
          {username}
        </p>
      </a>
    </nav>
  );
}

export { Navbar, navbarVariants };
