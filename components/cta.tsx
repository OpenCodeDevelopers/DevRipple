import { CallToActionButtonProps } from "@/types";
import Link from "next/link";

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  children,
  variant = "default",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-6 py-2 tracking-wide";

  const defaultClasses =
    "bg-primary text-primary-foreground shadow-xl hover:bg-primary/90";
  const secondaryClasses =
    "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 border border-input";

  const variantClasses =
    variant === "default" ? defaultClasses : secondaryClasses;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
};
