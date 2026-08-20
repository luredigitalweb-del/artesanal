import { MessageCircle, Camera, Timer, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA } from "@/lib/site";

const STEPS = [
  {
    icon: Camera,
    title: "Mande a foto",
    text: "Envie uma foto do amassado ou descreva o serviço que precisa.",
  },
  {
    icon: Timer,
    title: "Receba o orçamento",
    text: "Nossa equipe avalia e responde com prazo e valor no mesmo dia útil.",
  },
  {
    icon: ShieldCheck,
    title: "Agende e retire",
    text: "Deixe o veículo na unidade mais próxima e retire pronto na data combinada.",
  },
];

export const FinalCta = () => (
  <section id="orcamento" className="section-light relative overflow-hidden py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(217,182,78,0.22)_0%,transparent_68%)]" />

    <div className="container relative">
      <div className="overflow-hidden rounded-[2.25rem] border border-gold-700/25 bg-white shadow-[0_40px_100px_-60px_rgba(13,13,13,0.7)]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-700/30 bg-gold-700/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700">
                Orçamento sem compromisso
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.7rem]">
                Seu carro merece voltar a ser{" "}
                <span className="shiny">o carro que ele era</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-ink/65">
                Fale agora com a equipe da Artesanal Car pelo WhatsApp. Avaliamos
                o seu caso, explicamos o que dá para resolver sem pintura e
                passamos prazo e valor com clareza.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA.final}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-gold-grad px-8 py-4 text-[15px] font-extrabold text-ink shadow-[0_18px_44px_-16px_rgba(217,182,78,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com um especialista
                </a>
                <a
                  href="tel:+5563999761040"
                  className="shimmer shimmer-dark inline-flex h-15 items-center justify-center gap-2.5 rounded-full border border-ink/18 px-8 py-4 text-[15px] font-bold text-ink transition-all duration-300 hover:border-gold-600 hover:text-gold-700"
                >
                  (63) 99976-1040
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-6 text-[13px] text-ink/45">
                Atendimento de segunda a sexta, das 08h às 18h, sem fechar para o
                almoço. Sábado das 08h às 12h em Palmas e Araguaína.
              </p>
            </Reveal>
          </div>

          <div className="relative flex flex-col justify-center gap-4 bg-ink p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_80%_20%,rgba(217,182,78,0.16)_0%,transparent_70%)]" />

            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={200 + i * 100}>
                <div className="relative flex items-start gap-4 rounded-2xl border border-gold-400/16 bg-white/[0.03] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-grad text-ink">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-400">
                      Passo {i + 1}
                    </p>
                    <h3 className="mt-1 text-[15px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
