import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WA } from "@/lib/site";

const UNITS = [
  {
    city: "Palmas",
    tag: "Matriz",
    address:
      "Quadra 402 Sul, Avenida LO 11, 1b — Plano Diretor Sul, Palmas/TO, CEP 77016-524",
    hours: ["Segunda a sexta, 08h às 18h (sem fechar para almoço)", "Sábado, 08h às 12h"],
    note: "26 colaboradores e cerca de 350 veículos atendidos por mês.",
    maps: "https://www.google.com/maps/search/?api=1&query=Artesanal+Car+Martelinho+de+Ouro%2C+Quadra+402+Sul+Avenida+LO+11+1b%2C+Plano+Diretor+Sul%2C+Palmas+-+TO%2C+77016-524",
  },
  {
    city: "Paraíso do Tocantins",
    tag: "Desde 2025",
    address: "Avenida Machado de Assis, 1019, Setor Serrano",
    hours: ["Segunda a sexta, 08h às 18h (sem fechar para almoço)", "Sábado fechado"],
    note: "Atende também as cidades da região que têm Paraíso como referência.",
    maps: "https://www.google.com/maps/search/?api=1&query=Artesanal+Car+Paraiso+do+Tocantins",
  },
  {
    city: "Araguaína",
    tag: "Unidade nova",
    address: "Consulte o endereço da unidade pelo WhatsApp",
    hours: ["Segunda a sexta, 08h às 18h (sem fechar para almoço)", "Sábado, 08h às 12h"],
    note: "Operação iniciada em 2026, com capacidade técnica em expansão.",
    maps: "https://www.google.com/maps/search/?api=1&query=Artesanal+Car+Araguaina+TO",
  },
];

export const Units = () => (
  <section id="unidades" className="section-dark relative overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.75rem] rounded-b-[2rem] sm:rounded-b-[2.75rem] py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(217,182,78,0.12)_0%,transparent_65%)]" />

    <div className="container relative">
      <SectionHeading
        eyebrow="Onde estamos"
        title={
          <>
            Três unidades no <span className="shiny">Tocantins</span>, o mesmo
            padrão de entrega
          </>
        }
        description="Escolha a unidade mais perto de você e agende direto com a equipe pelo WhatsApp."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {UNITS.map((unit, i) => (
          <Reveal key={unit.city} delay={i * 100}>
            <article className="card-dark group flex h-full flex-col gap-5 rounded-[1.6rem] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {unit.city}
                </h3>
                <span className="shrink-0 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-300">
                  {unit.tag}
                </span>
              </div>

              <div className="flex flex-col gap-3.5 text-sm">
                <p className="flex gap-3 text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {unit.address}
                </p>
                <div className="flex gap-3 text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span className="flex flex-col gap-1">
                    {unit.hours.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </div>
              </div>

              <p className="flex-1 border-t border-white/8 pt-4 text-[13px] leading-relaxed text-white/48">
                {unit.note}
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={WA.unidade(unit.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold-grad px-5 text-[13px] font-extrabold text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar aqui
                </a>
                <a
                  href={unit.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer shimmer-dark inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/18 px-5 text-[13px] font-bold text-white/85 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-200"
                >
                  <Navigation className="h-4 w-4" />
                  Como chegar
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
