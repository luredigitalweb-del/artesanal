import {
  Building2,
  GraduationCap,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  Gem,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Gem,
    title: "Referência em Martelinho de Ouro",
    text: "A técnica que trouxemos para a região virou nossa assinatura. É o serviço que mais executamos e o que fazemos melhor.",
  },
  {
    icon: Building2,
    title: "A escolha das concessionárias",
    text: "Somos a parceira técnica de concessionárias, lojas de seminovos e oficinas do Tocantins. Quem entende de carro confia o serviço a nós.",
  },
  {
    icon: GraduationCap,
    title: "Equipe em treinamento constante",
    text: "26 colaboradores na unidade de Palmas, com técnicos experientes e certificação em estética automotiva.",
  },
  {
    icon: ClipboardCheck,
    title: "Processos bem definidos",
    text: "Cada etapa tem checklist, responsável e prazo. Por isso entregamos no dia combinado, do jeito combinado.",
  },
  {
    icon: ShieldCheck,
    title: "Resolvemos o caso difícil",
    text: "Boa parte dos carros que chegam aqui já passou por outra oficina. Assumimos o reparo que os outros não conseguiram fazer.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado com carro de valor",
    text: "Veículos premium exigem outro nível de atenção. Aqui o seu carro é tratado com o protocolo que ele merece.",
  },
];

export const Differentials = () => (
  <section id="diferenciais" className="section-light py-20 sm:py-28">
    <div className="container">
      <SectionHeading
        tone="light"
        eyebrow="Por que a Artesanal Car"
        title={
          <>
            <span className="sm:hidden">
              Do jeito que ele
              <br />
              <span className="shiny inline-block">saiu de fábrica</span>
            </span>
            <span className="hidden sm:inline">
              Não é só consertar. É devolver o carro{" "}
              <span className="shiny">do jeito que ele saiu de fábrica</span>
            </span>
          </>
        }
        description="Nossos clientes chegam pela confiança e voltam pela qualidade. Estes são os motivos que aparecem em toda avaliação que recebemos."
      />
    </div>

    {/* Carrossel contínuo: a lista é duplicada e o deslocamento vai até -50%,
        o que faz o laço ser imperceptível. Passar o mouse pausa o movimento. */}
    <Reveal className="group relative mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#F6F5F2] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#F6F5F2] to-transparent sm:w-24" />

      <ul
        className="flex w-max animate-marquee-x items-stretch gap-5 px-5 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "50s" }}
      >
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <li key={index} className="flex w-[280px] shrink-0 sm:w-[330px]">
            <article className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-[1.6rem] border border-gold-700/25 bg-gradient-to-b from-white to-[#F3EFE5] p-7 shadow-[0_18px_44px_-34px_rgba(13,13,13,0.5)] transition-all duration-500 hover:border-gold-600/60 hover:shadow-[0_30px_64px_-40px_rgba(13,13,13,0.55)]">
              <span className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gold-300/25 blur-3xl transition-colors duration-500 group-hover/card:bg-gold-300/45" />

              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold-300 transition-transform duration-500 group-hover/card:scale-105">
                <item.icon className="h-5 w-5" />
              </span>

              <h3 className="relative mt-5 text-[17px] font-bold leading-snug">
                {item.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-ink/60">
                {item.text}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);
