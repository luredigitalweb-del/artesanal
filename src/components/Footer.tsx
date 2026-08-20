import { Instagram, MapPin, Phone, Clock, Globe } from "lucide-react";
import { INSTAGRAM_URL, SITE_PHONE, WA } from "@/lib/site";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Martelinho de Ouro", href: "#martelinho" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Instagram", href: "#instagram" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Nossa história", href: "#historia" },
  { label: "Unidades", href: "#unidades" },
];

export const Footer = () => (
  <footer className="section-dark relative overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.75rem] border-t border-gold-700/25 pb-10 pt-16 sm:pt-20">
    <div className="container">
      <div className="grid gap-10 text-center lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-12 lg:text-left">
        <div>
          <img
            src="/logo.png"
            alt="Artesanal Car Martelinho de Ouro"
            className="mx-auto h-16 w-auto lg:mx-0"
            loading="lazy"
          />
          <p className="mx-auto mt-5 hidden max-w-sm text-pretty text-sm leading-relaxed text-white/55 lg:mx-0 lg:block">
            Martelinho de Ouro e estética automotiva completa há 13 anos no
            Tocantins. Referência técnica em Palmas, Paraíso e Araguaína, e a
            escolha das concessionárias da região.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer shimmer-dark mt-6 inline-flex items-center gap-2.5 rounded-full border border-gold-400/25 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-gold-400/10"
          >
            <Instagram className="h-4 w-4" />
            @artesanalcar.martelinho
          </a>
        </div>

        <nav className="hidden lg:block">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
            Navegue
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-gold-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
            Contato e unidades
          </h3>
          <ul className="mt-5 flex flex-col items-center gap-3.5 text-sm text-white/60 lg:items-start lg:gap-4">
            <li className="flex justify-center gap-3 text-center lg:justify-start lg:text-left">
              <Phone className="mt-0.5 hidden h-4 w-4 shrink-0 text-gold-500 lg:block" />
              <a
                href={WA.final}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-200"
              >
                {SITE_PHONE}
              </a>
            </li>
            <li className="flex justify-center gap-3 text-center lg:justify-start lg:text-left">
              <MapPin className="mt-0.5 hidden h-4 w-4 shrink-0 text-gold-500 lg:block" />
              <span>
                Palmas — Q. 402 Sul, Av. LO 11, 1b, Plano Diretor Sul,
                77016-524
                <br />
                Paraíso — Av. Machado de Assis, 1019
                <br />
                Araguaína — consulte pelo WhatsApp
              </span>
            </li>
            <li className="flex justify-center gap-3 text-center lg:justify-start lg:text-left">
              <Clock className="mt-0.5 hidden h-4 w-4 shrink-0 text-gold-500 lg:block" />
              <span>
                Segunda a sexta, 08h às 18h
                <br />
                Sábado, 08h às 12h (Palmas e Araguaína)
              </span>
            </li>
            <li className="flex justify-center gap-3 text-center lg:justify-start lg:text-left">
              <Globe className="mt-0.5 hidden h-4 w-4 shrink-0 text-gold-500 lg:block" />
              <a
                href="https://artesanalcar.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-200"
              >
                artesanalcar.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 gold-rule" />

      <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-white/35 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Artesanal Car — Martelinho de Ouro. Todos
          os direitos reservados.
        </p>
        <p className="font-thin italic text-white/45">
          Quem dorme sonha, quem vive realiza.
        </p>
      </div>
    </div>
  </footer>
);
