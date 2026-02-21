import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { ComponentPropsWithoutRef, ComponentType, ElementType } from "react";

interface BaseProps {
  label: string;
  icon?: ElementType;
  isLoading?: boolean;
}

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a">;

export default function Button({
  label,
  className,
  href,
  onClick,
  icon: Icon,
  ...props
}: ButtonProps) {
  const styles = cn(
    "flex items-center justify-center gap-2 px-8 py-2 text-white font-semibold rounded-full bg-linear-to-r from-[#3e090a] to-[#d11f22] cursor-pointer transition hover:opacity-90",
    className,
  );

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </>
  );

  if (href) {
    return (
      <Link {...props} href={href as any} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
