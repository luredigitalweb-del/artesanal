import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WA } from "@/lib/site";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Martelinho", href: "#martelinho" },
  { label: "Estrutura", href: "#numeros" },
  { label: "Instagram", href: "#instagram" },
  { label: "Unidades", href: "#unidades" },
];

export const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <div className="mx-auto w-full max-w-6xl">
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-3 rounded-[1.75rem] border px-3 py-2.5 transition-all duration-500 sm:rounded-full sm:px-4",
            scrolled
              ? "border-gold-400/25 bg-ink/85 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
              : "border-white/10 bg-ink/55 backdrop-blur-md"
          )}
        >
          <a
            href="#topo"
            className="flex shrink-0 items-center pl-1.5 sm:pl-3"
            aria-label="Artesanal Car — Martelinho de Ouro"
          >
            <img
              src="/logo.png"
              alt="Artesanal Car Martelinho de Ouro"
              className="h-12 w-auto transition-transform duration-500 hover:scale-105 sm:h-14 lg:h-16"
              width={63}
              height={64}
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-3.5 py-2 text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-gold-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={WA.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer hidden h-11 items-center gap-2 rounded-full bg-gold-grad px-5 text-[13px] font-extrabold text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar agora
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/30 text-gold-200 transition-colors hover:bg-gold-400/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "pointer-events-auto mt-2 origin-top overflow-hidden rounded-[1.75rem] border border-gold-400/25 bg-ink/95 backdrop-blur-xl transition-all duration-400 lg:hidden",
            open
              ? "max-h-[520px] scale-100 opacity-100 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)]"
              : "pointer-events-none max-h-0 scale-95 opacity-0"
          )}
        >
          <ul className="flex flex-col p-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:bg-gold-400/10 hover:text-gold-200"
                >
                  {link.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" />
                </a>
              </li>
            ))}
            <li className="p-1 pt-2">
              <a
                href={WA.hero}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="shimmer flex h-13 items-center justify-center gap-2 rounded-full bg-gold-grad px-6 py-3.5 text-sm font-extrabold text-ink"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar meu horário
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
