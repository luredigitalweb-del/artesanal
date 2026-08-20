import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) => {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sem suporte a IntersectionObserver o conteúdo aparece direto: é melhor
    // perder a animação do que deixar um bloco invisível na página.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let feito = false;
    const revelar = () => {
      if (feito) return;
      feito = true;
      setVisible(true);
      observer.disconnect();
      resize?.disconnect();
    };

    // threshold 0: basta encostar na tela. Com um valor maior, um bloco mais
    // alto que a janela pode nunca alcançar a proporção exigida.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revelar();
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);

    // Imagens e carrosséis que carregam depois mudam a altura do bloco. Se ele
    // estivesse com altura zero no instante em que passou pela tela, o
    // observador não dispararia e o conteúdo ficaria invisível para sempre.
    const resize =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            const r = node.getBoundingClientRect();
            if (r.height > 0 && r.top < window.innerHeight && r.bottom > 0) {
              revelar();
            }
          })
        : null;
    resize?.observe(node);

    return () => {
      observer.disconnect();
      resize?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
};
