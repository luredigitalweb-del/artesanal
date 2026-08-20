import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  tone?: "dark" | "light";
  /** Substitui o ponto dourado padrão por um ícone. */
  icon?: ReactNode;
  className?: string;
}

/** Etiqueta que identifica o assunto logo acima de um título. */
export const Eyebrow = ({
  children,
  tone = "dark",
  icon,
  className,
}: EyebrowProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]",
      tone === "dark"
        ? "border-gold-400/35 bg-gold-400/[0.07] text-gold-200"
        : "border-gold-700/30 bg-gold-700/[0.06] text-gold-700",
      className
    )}
  >
    {icon ?? <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />}
    {children}
  </span>
);
