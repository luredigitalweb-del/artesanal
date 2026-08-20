import {
  MessageCircle,
  Wrench,
  ScanSearch,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WA } from "@/lib/site";

const STEPS = [
  {
    icon: ScanSearch,
    title: "Avaliação técnica",
    text: "Analisamos o amassado sob luz técnica para definir se o reparo é possível sem pintura e qual acesso será usado.",
  },
  {
    icon: Wrench,
    title: "Reparo por dentro da chapa",
    text: "Com bastões e martelinho, a lataria volta ao formato original milímetro a milímetro, sem massa e sem lixa.",
  },
  {
    icon: Sparkles,
    title: "Acabamento e conferência",
    text: "Refinamos o reparo e conferimos o resultado sob refletor até que a superfície fique perfeitamente lisa.",
  },
  {
    icon: BadgeCheck,
    title: "Entrega com o carro limpo",
    text: "Seu veículo é entregue revisado e higienizado, com a pintura de fábrica intacta e o valor de revenda preservado.",
  },
];

const Passo = ({ step }: { step: (typeof STEPS)[number] }) => (
  <div className="card-dark group/passo flex h-full w-full items-center gap-4 rounded-2xl p-5 transition-all duration-500 hover:border-gold-400/45 hover:bg-white/[0.03]">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-300 transition-colors duration-500 group-hover/passo:bg-gold-400/20">
      <step.icon className="h-5 w-5" />
    </span>
    <div>
      <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/58">{step.text}</p>
    </div>
  </div>
);

export const MartelinhoSpotlight = () => (
  <section
    id="martelinho"
    className="section-dark relative overflow-hidden rounded-t-[2rem] rounded-b-[2rem] py-20 sm:rounded-t-[2.75rem] sm:rounded-b-[2.75rem] sm:py-28"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_10%,rgba(217,182,78,0.12)_0%,transparent_65%)]" />

    <div className="container relative">
      <SectionHeading
        eyebrow="A técnica que nos tornou referência"
        title={
          <>
            Martelinho de Ouro por quem
            <br />
            <span className="shiny inline-block">trouxe a técnica</span> ao
            Tocantins
          </>
        }
        description="Quando a Artesanal Car chegou em Palmas, quase ninguém acreditava que dava para tirar um amassado sem pintar. Treze anos depois, somos a oficina para quem as concessionárias mandam os carros mais exigentes."
      />

      {/* As duas colunas se esticam para a mesma altura: à esquerda os passos
          dividem o espaço, à direita a foto grande absorve a sobra. */}
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        {/* No celular os passos viram carrossel contínuo, com a lista duplicada
            e deslocamento até -50% para o laço ficar imperceptível. */}
        <Reveal className="group relative -mx-5 overflow-hidden lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent" />

          <ul
            className="flex w-max animate-marquee-x items-stretch gap-4 px-5 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "38s" }}
          >
            {[...STEPS, ...STEPS].map((step, index) => (
              <li key={index} className="flex w-[270px] shrink-0">
                <Passo step={step} />
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="hidden flex-col gap-4 lg:flex">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className="flex flex-1">
              <Passo step={step} />
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <Reveal delay={120} className="lg:flex-1">
            <div className="gold-frame h-full overflow-hidden rounded-[1.75rem] p-[1.5px]">
              <div className="relative h-[230px] overflow-hidden rounded-[1.7rem] sm:h-[280px] lg:h-full lg:min-h-[240px]">
                <img
                  src="/fotos/martelinho-teto.jpg"
                  alt="Técnico da Artesanal Car realizando martelinho de ouro"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-[center_68%]"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:h-[200px] sm:grid-cols-2">
            <Reveal delay={180}>
              <div className="h-full overflow-hidden rounded-[1.5rem] border border-gold-400/20">
                <img
                  src="/fotos/vitrificacao-kicks.jpg"
                  alt="Veículo com pintura vitrificada pela Artesanal Car"
                  loading="lazy"
                  className="h-40 w-full object-cover sm:h-full"
                />
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="card-dark flex h-full flex-col justify-center gap-1.5 rounded-[1.5rem] p-6 text-center sm:text-left">
                <p className="text-4xl font-extrabold tracking-tight text-gold-200">
                  350
                </p>
                <p className="text-sm leading-relaxed text-white/60">
                  veículos atendidos por mês somente na unidade de Palmas.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="card-dark rounded-[1.5rem] p-5 text-center sm:p-6 sm:text-left">
              <p className="font-thin text-base italic leading-relaxed text-gold-100 sm:text-lg">
                “Somos procurados para resolver o que outras empresas não
                conseguiram. É por isso que carro de valor chega até aqui.”
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500">
                Euler — Fundador da Artesanal Car
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-12 flex justify-center">
          <a
            href={WA.martelinho}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gold-grad px-9 text-[15px] font-extrabold text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar foto do amassado
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
