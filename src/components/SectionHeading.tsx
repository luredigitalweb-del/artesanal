import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className
    )}
  >
    {eyebrow && (
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
    )}

    <Reveal delay={80}>
      <h2 className="max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
    </Reveal>

    {description && (
      <Reveal delay={150}>
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-ink/65"
          )}
        >
          {description}
        </p>
      </Reveal>
    )}

    <Reveal delay={200}>
      <span
        className={cn(
          "mt-1 block h-px w-24 bg-gold-line",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </Reveal>
  </div>
);
