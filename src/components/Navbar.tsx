import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const navbarVariants = cva("flex justify-between", {
  variants: {
    variant: {
      default: "w-full bg-white sm:bg-transparent",
      whiteBackground: "w-full bg-white border border-b border-slate-200",
      admin: "bg-gray-50 border border-b border-slate-200",
    },
    size: {
      default: "px-[20px] py-3 sm:px-[60px] sm:py-8",
      sm: "px-6 pb-4 pt-[20px]",
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
  let textStyle = "text-white";
  if (variant === "admin" || variant === "whiteBackground")
    textStyle = "text-slate-900";

  return (
    <nav
      className={cn(navbarVariants({ variant, size, position, className }))}
      {...props}>
      {variant === "admin" && (
        <h1 className="text-2xl font-semibold">Articles</h1>
      )}
      {variant != "admin" && (
        <img src={logoSrc} className="max-sm:hidden" alt="logo" />
      )}
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
