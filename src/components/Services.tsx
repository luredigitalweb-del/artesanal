import {
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Minus,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";
import { WA } from "@/lib/site";

/**
 * PRAZO E GARANTIA
 * Os campos `prazo` e `garantia` só aparecem no card quando preenchidos.
 * Enquanto estiverem como string vazia, a linha some sem quebrar o layout.
 * Preencher com os valores oficiais da Artesanal Car, por exemplo:
 *   prazo: "1 dia útil"   garantia: "90 dias"
 */

const REPAROS = [
  {
    name: "Martelinho de Ouro",
    badge: "Nossa especialidade",
    quando: "Quando a tinta NÃO trincou",
    text: "O amassado é modelado por dentro da chapa até a peça voltar ao formato de fábrica.",
    bullets: [
      "Sem massa, sem lixa e sem repintura",
      "Pintura de fábrica preservada",
      "Mantém o valor de revenda do veículo",
    ],
    prazo: "",
    garantia: "",
    cta: "Agendar meu martelinho",
    destaque: true,
  },
  {
    name: "Pintura Automotiva",
    badge: "Quando o reparo exige tinta",
    quando: "Quando a tinta trincou ou lascou",
    text: "Reparo completo da estrutura e da pintura, para o veículo recuperar a aparência original.",
    bullets: [
      "Corrige danos de colisão e desgaste",
      "Técnicas modernas e materiais de alta qualidade",
      "Troca de peças no mesmo atendimento",
    ],
    prazo: "",
    garantia: "",
    cta: "Agendar minha pintura",
    destaque: false,
  },
];

const PACKAGES = [
  {
    name: "Essencial",
    tag: "Entrada",
    pitch: "Para o carro voltar a brilhar",
    items: ["Polimento técnico", "Limpeza interna completa"],
    faltam: ["Vitrificação de pintura", "Cristalização de vidros"],
    ideal: "Quem quer renovar a aparência do veículo sem grandes intervenções.",
    prazo: "",
    garantia: "",
    featured: false,
  },
  {
    name: "Completo",
    tag: "Mais escolhido",
    pitch: "Brilho de vitrine com proteção que dura",
    items: [
      "Polimento técnico",
      "Vitrificação de pintura",
      "Limpeza interna completa",
      "Cristalização de vidros",
    ],
    faltam: ["PPF nas áreas de maior impacto", "Vitrificação de bancos"],
    ideal: "Quem quer resultado de vitrine e proteção duradoura na pintura.",
    prazo: "",
    garantia: "",
    featured: true,
  },
  {
    name: "Premium",
    tag: "Topo de linha",
    pitch: "Proteção máxima para carro de valor",
    items: [
      "Tudo do pacote Completo",
      "PPF nas áreas de maior impacto",
      "Vitrificação de bancos",
      "Oxi-sanitização",
    ],
    faltam: [],
    ideal: "Veículos premium e seminovos de alto padrão que exigem outro nível.",
    prazo: "",
    garantia: "",
    featured: false,
  },
];

const PPF = {
  name: "PPF",
  subtitle: "Película de proteção de pintura",
  text: "Película transparente que blinda a pintura contra pedras, riscos e sol, sem alterar a cor original do veículo.",
};

const AVULSOS = [
  "Vitrificação de Pintura",
  "Polimento Técnico",
  "Limpeza Interna",
  "Cristalização de Vidros",
  "Vitrificação de Bancos",
  "Oxi-Sanitização",
  "Instalação de Película",
  "Remoção de Guariba",
  "Troca de Peças",
];

const Meta = ({
  prazo,
  garantia,
  tone = "light",
}: {
  prazo: string;
  garantia: string;
  tone?: "light" | "dark";
}) => {
  if (!prazo && !garantia) return null;

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-[13px] font-semibold",
        tone === "dark"
          ? "border-white/10 text-white/70"
          : "border-ink/10 text-ink/70"
      )}
    >
      {prazo && (
        <li className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-gold-600" />
          {prazo}
        </li>
      )}
      {garantia && (
        <li className="inline-flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-gold-600" />
          Garantia de {garantia}
        </li>
      )}
    </ul>
  );
};

export const Services = () => {
  // No celular os pacotes viram sanfona: abrir um fecha o anterior.
  // A partir de lg os tres ficam abertos lado a lado para comparacao.
  const [aberto, setAberto] = useState(1);

  return (
  <section id="servicos" className="section-light py-20 sm:py-28">
    <div className="container">
      <SectionHeading
        tone="light"
        eyebrow="Nossos serviços"
        title={
          <>
            Tudo em <span className="shiny">estética automotiva</span> em um só
            lugar
          </>
        }
        description="Do reparo do amassado à proteção da pintura: um centro automotivo completo, com processos definidos e técnicos em treinamento constante."
      />

      {/* ---------- reparo: comparativo ---------- */}
      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-[2rem] border border-gold-700/25 bg-white shadow-[0_26px_70px_-50px_rgba(13,13,13,0.55)]">
          <div className="border-b border-gold-700/20 bg-[#FBF9F4] px-7 py-5 text-center sm:px-9">
            <p className="text-lg font-bold leading-snug sm:text-xl">
              O amassado do seu carro dá para{" "}
              <span className="shiny">tirar sem pintar</span>?
            </p>
            <p className="mx-auto mt-1.5 max-w-xl text-sm leading-relaxed text-ink/55">
              Depende de uma coisa só: se a pintura original resistiu à batida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2">
          {REPAROS.map((service) => (
            <article
              key={service.name}
              className={cn(
                "group relative flex flex-col items-center gap-5 p-7 text-center transition-colors duration-500 sm:p-9 lg:items-start lg:text-left",
                service.destaque
                  ? "bg-gradient-to-b from-gold-100/45 to-white hover:from-gold-100/70"
                  : "border-t border-gold-700/20 hover:bg-[#FBF9F4] lg:border-l lg:border-t-0"
              )}
            >
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-1",
                  service.destaque ? "bg-gold-grad" : "bg-ink/15"
                )}
              />

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <h4 className="text-2xl font-bold leading-tight">
                  {service.name}
                </h4>
                {service.destaque && (
                  <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gold-300">
                    {service.badge}
                  </span>
                )}
              </div>

              <p className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-xl bg-ink/[0.05] px-3.5 py-2.5 text-xs font-bold text-ink/75 sm:px-4 sm:text-[13px]">
                <Wrench className="h-4 w-4 shrink-0 text-gold-700" />
                {service.quando}
              </p>

              <p className="text-pretty leading-relaxed text-ink/65">
                {service.text}
              </p>

              <ul className="flex flex-1 flex-col gap-3 text-left">
                {service.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-ink/80"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-700/12 text-gold-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Meta prazo={service.prazo} garantia={service.garantia} />

              <a
                href={WA.servico(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shimmer inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold transition-transform duration-300 hover:-translate-y-0.5",
                  service.destaque
                    ? "bg-gold-grad text-ink"
                    : "shimmer-dark border border-ink/20 text-ink group-hover:border-gold-600"
                )}
              >
                {service.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={140} className="mt-5">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-gold-700/25 bg-ink p-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-base font-bold text-white">
              Não sabe em qual caso o seu carro se encaixa?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Manda uma foto do amassado que a nossa equipe avalia e te responde.
            </p>
          </div>
          <a
            href={WA.martelinho}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer inline-flex h-13 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gold-grad px-7 py-3.5 text-sm font-extrabold text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <Camera className="h-4 w-4" />
            Mandar foto e agendar
          </a>
        </div>
      </Reveal>

      {/* ---------- pacotes ---------- */}
      <Reveal className="mt-16">
        <div className="flex flex-col gap-3 text-center">
          <Eyebrow tone="light" className="mx-auto">
            Estética e proteção
          </Eyebrow>
          <p className="mx-auto max-w-2xl text-balance text-2xl font-bold leading-tight sm:text-3xl">
            Monte o <span className="shiny">pacote do seu carro</span> e resolva
            tudo em uma única passagem pela oficina
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
        {PACKAGES.map((pack, index) => (
          <Reveal key={pack.name} delay={index * 100}>
            <article
              className={cn(
                "group relative flex h-full flex-col gap-5 overflow-hidden rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-2 sm:p-8",
                pack.featured
                  ? "border border-gold-500/60 bg-ink text-white shadow-[0_34px_80px_-45px_rgba(13,13,13,0.85)] hover:border-gold-300 hover:shadow-[0_40px_90px_-40px_rgba(217,182,78,0.45)]"
                  : "border border-gold-700/25 bg-gradient-to-b from-white to-[#F3EFE5] shadow-[0_18px_44px_-34px_rgba(13,13,13,0.5)] hover:border-gold-600/60 hover:shadow-[0_34px_70px_-40px_rgba(13,13,13,0.55)]"
              )}
            >
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-1.5 transition-opacity duration-500",
                  pack.featured
                    ? "bg-gold-grad"
                    : "bg-gold-grad opacity-45 group-hover:opacity-100"
                )}
              />
              <span
                className={cn(
                  "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500",
                  pack.featured
                    ? "bg-gold-400/20 group-hover:bg-gold-400/30"
                    : "bg-gold-300/25 group-hover:bg-gold-300/45"
                )}
              />

              <button
                type="button"
                onClick={() => setAberto(aberto === index ? -1 : index)}
                aria-expanded={aberto === index}
                aria-controls={`pacote-${pack.name}`}
                className="relative flex w-full items-start justify-between gap-4 text-left lg:pointer-events-none"
              >
                <span className="flex flex-col items-start gap-4">
                <Eyebrow
                  tone={pack.featured ? "dark" : "light"}
                  className={cn(
                    pack.featured && "border-gold-400/60 bg-gold-400/[0.14]"
                  )}
                >
                  {pack.tag}
                </Eyebrow>

                <h4
                  className={cn(
                    "text-2xl font-bold leading-tight",
                    pack.featured ? "text-gold-200" : "text-ink"
                  )}
                >
                  {pack.name}
                  <span
                    className={cn(
                      "mt-1.5 block text-sm font-normal",
                      pack.featured ? "text-white/65" : "text-ink/60"
                    )}
                  >
                    {pack.pitch}
                  </span>
                </h4>
                </span>

                <ChevronDown
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 transition-transform duration-500 lg:hidden",
                    pack.featured ? "text-gold-300" : "text-ink/40",
                    aberto === index && "rotate-180"
                  )}
                />
              </button>

              <div
                id={`pacote-${pack.name}`}
                className={cn(
                  "grid transition-all duration-500 lg:flex lg:flex-1 lg:flex-col lg:gap-5 lg:opacity-100",
                  aberto === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="flex min-h-0 flex-col gap-5 overflow-hidden lg:contents">
              <ul className="relative flex flex-1 flex-col gap-3">
                {pack.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start gap-3 text-sm font-medium",
                      pack.featured ? "text-white/85" : "text-ink/80"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        pack.featured
                          ? "bg-gold-400/20 text-gold-300"
                          : "bg-gold-700/12 text-gold-700"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}

                {pack.faltam.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start gap-3 text-sm line-through",
                      pack.featured ? "text-white/30" : "text-ink/35"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        pack.featured
                          ? "bg-white/[0.06] text-white/35"
                          : "bg-ink/[0.05] text-ink/35"
                      )}
                    >
                      <Minus className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className={cn(
                  "text-[13px] leading-relaxed",
                  pack.featured ? "text-white/50" : "text-ink/50"
                )}
              >
                <span className="font-bold uppercase tracking-wider">
                  Ideal para:{" "}
                </span>
                {pack.ideal}
              </p>

              <Meta
                prazo={pack.prazo}
                garantia={pack.garantia}
                tone={pack.featured ? "dark" : "light"}
              />

              <a
                href={WA.pacote(pack.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shimmer inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold transition-transform duration-300 hover:-translate-y-0.5",
                  pack.featured
                    ? "bg-gold-grad text-ink"
                    : "shimmer-dark border border-ink/20 text-ink hover:border-gold-600"
                )}
              >
                Agendar o {pack.name}
                <ArrowUpRight className="h-4 w-4" />
              </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ---------- avulsos ---------- */}
      <Reveal className="mt-12">
        <div className="rounded-[1.6rem] border border-gold-700/20 bg-white/70 p-6 sm:p-7">
          <div className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:justify-between sm:gap-x-6 sm:text-left">
            <Eyebrow tone="light" className="whitespace-nowrap">
              Serviços avulsos
            </Eyebrow>
            <p className="text-sm text-ink/55">
              Prefere contratar separado? Todos os serviços dos pacotes também
              são executados de forma avulsa.
            </p>
          </div>

          <a
            href={WA.servico("PPF (película de proteção de pintura)")}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 flex flex-col items-center gap-4 rounded-[1.2rem] border border-gold-500/40 bg-ink px-5 py-5 text-center transition-all duration-500 hover:border-gold-300 hover:shadow-[0_22px_50px_-36px_rgba(217,182,78,0.55)] sm:flex-row sm:gap-x-5 sm:py-4 sm:text-left"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-grad text-ink transition-transform duration-500 group-hover:scale-105">
              <ShieldCheck className="h-5 w-5" />
            </span>

            <span className="flex flex-1 flex-col items-center gap-1.5 sm:items-start">
              <span className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
                <span className="text-lg font-bold text-white">{PPF.name}</span>
                <span className="rounded-full border border-gold-400/40 bg-gold-400/[0.12] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold-200">
                  Em alta
                </span>
              </span>
              <span className="text-sm text-white/55">{PPF.subtitle}</span>
            </span>

            {/* e um span dentro do link do card, entao reage ao hover do grupo */}
            <span className="shimmer inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gold-grad px-5 sm:h-11 sm:w-auto text-sm font-extrabold text-ink shadow-[0_10px_26px_-14px_rgba(217,182,78,0.9)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_34px_-14px_rgba(217,182,78,1)]">
              Agendar PPF
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>

          <ul className="mt-6 grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
            {AVULSOS.map((item) => (
              <li key={item}>
                <a
                  href={WA.servico(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-b border-ink/10 py-3 text-[15px] font-semibold text-ink transition-colors duration-300 hover:border-gold-600/40 hover:text-gold-700"
                >
                  <span className="min-w-0 flex-1 truncate">{item}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-700" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
  );
};
