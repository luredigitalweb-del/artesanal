import { Instagram, MousePointerClick, Video, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramPhone } from "./InstagramPhone";
import { INSTAGRAM_URL } from "@/lib/site";

const POINTS = [
  {
    icon: Video,
    title: "O serviço acontecendo",
    text: "Reparo, pintura e vitrificação gravados dentro da oficina. Você vê a técnica antes de deixar o carro conosco.",
  },
  {
    icon: Users,
    title: "As pessoas por trás",
    text: "Time, bastidores e rotina de uma equipe de 26 pessoas que trata cada veículo como se fosse o próprio.",
  },
  {
    icon: MousePointerClick,
    title: "Resultados reais",
    text: "Antes e depois de veículos que passaram pelas nossas unidades, sem retoque e sem promessa vazia.",
  },
];

const Topico = ({ point }: { point: (typeof POINTS)[number] }) => (
  <div className="group flex h-full w-full gap-4 rounded-2xl border border-gold-700/14 bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold-600/45 hover:shadow-[0_24px_50px_-38px_rgba(13,13,13,0.6)]">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-gold-300">
      <point.icon className="h-5 w-5" />
    </span>
    <div>
      <h3 className="text-[15px] font-bold">{point.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{point.text}</p>
    </div>
  </div>
);

export const InstagramSection = () => (
  <section id="instagram" className="section-light relative overflow-hidden py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(217,182,78,0.16)_0%,transparent_70%)]" />

    <div className="container relative">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        <div className="min-w-0 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-700/30 bg-gold-700/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700">
              <Instagram className="h-3.5 w-3.5" />
              @artesanalcar.martelinho
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold lg:mx-0 leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]">
              Acompanhe o nosso dia a dia e veja o{" "}
              <span className="shiny">padrão de entrega</span> antes de decidir
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink/65 sm:text-lg lg:mx-0">
              Mais de 3.500 pessoas acompanham a oficina por dentro. Role o
              perfil ao lado e confira o que publicamos todos os dias.
            </p>
          </Reveal>

          {/* No celular os tópicos viram carrossel contínuo; a partir de lg
              voltam a ser uma coluna. */}
          <Reveal className="group relative -mx-5 mt-9 min-w-0 overflow-hidden lg:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F6F5F2] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F6F5F2] to-transparent" />

            <ul
              className="flex w-max animate-marquee-x items-stretch gap-4 px-5 group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "34s" }}
            >
              {[...POINTS, ...POINTS].map((point, index) => (
                <li key={index} className="flex w-[280px] shrink-0">
                  <Topico point={point} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-9 hidden flex-col gap-4 lg:flex">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={200 + i * 90}>
                <Topico point={point} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={220} className="justify-self-center">
          <div className="flex flex-col items-center gap-5">
            <InstagramPhone />
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
              <MousePointerClick className="h-4 w-4 animate-bounce" />
              Role dentro do celular
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold-grad px-8 text-[15px] font-extrabold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
