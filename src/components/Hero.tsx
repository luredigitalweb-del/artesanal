import { MessageCircle, ShieldCheck, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { HeroBackdrop } from "./HeroBackdrop";
import { BrandsMarquee } from "./BrandsMarquee";
import { WA } from "@/lib/site";

export const Hero = () => (
  <section
    id="topo"
    className="section-dark relative flex min-h-[100svh] items-center justify-center overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.75rem] pb-28 pt-32 sm:pb-32 sm:pt-36 [@media(max-height:700px)]:pb-16 [@media(max-height:700px)]:pt-24"
  >
    <HeroBackdrop />

    <div className="container relative z-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-ink/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-200 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Palmas • Paraíso • Araguaína
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-5 text-balance text-[1.8rem] sm:mt-7 font-extrabold leading-[1.06] tracking-tight min-[380px]:text-[1.95rem] sm:text-[3.4rem] lg:text-[4rem]">
            <span className="sm:hidden">
              Tiramos o amassado
              <br />
              <span className="shiny inline-block">sem repintura</span>
            </span>
            <span className="hidden sm:inline">
              Tiramos o amassado
              <br />
              sem tirar a{" "}
              <span className="shiny inline-block">pintura original</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-4 max-w-2xl text-pretty sm:mt-6 text-base leading-relaxed text-white/72 sm:text-lg">
            Há 13 anos somos referência em Martelinho de Ouro no Tocantins e a
            principal escolha das concessionárias da região.
            <span className="hidden sm:inline">
              {" "}
              Reparo sem pintura, estética automotiva completa e um padrão de
              acabamento que valoriza o seu veículo.
            </span>
          </p>
        </Reveal>

        <Reveal delay={230} className="w-full">
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-3">
            <a
              href={WA.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gold-grad px-8 text-[15px] font-extrabold text-ink shadow-[0_18px_44px_-16px_rgba(217,182,78,0.85)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar meu horário
            </a>
            <a
              href="#servicos"
              className="shimmer shimmer-dark inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-ink/40 px-8 text-[15px] font-bold text-white/90 backdrop-blur transition-all duration-300 hover:border-gold-400/60 hover:text-gold-200 sm:w-auto"
            >
              Ver todos os serviços
            </a>
          </div>
        </Reveal>
      </div>
    </div>

    <a
      href="#servicos"
      aria-label="Rolar para serviços"
      className="absolute bottom-14 left-1/2 z-10 hidden -translate-x-1/2 text-gold-400/70 transition-colors hover:text-gold-300 lg:block"
    >
      <ArrowDown className="h-5 w-5 animate-bounce" />
    </a>

    <BrandsMarquee className="absolute inset-x-0 bottom-0 z-10" />
  </section>
);
