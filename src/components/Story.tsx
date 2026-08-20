import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const TIMELINE = [
  {
    label: "2013",
    title: "De Minas para Palmas",
    text: "Euler aprendeu o Martelinho de Ouro com o sogro e veio atrás de um sonho, para uma cidade que nem conhecia a técnica.",
  },
  {
    label: "Primeiros anos",
    title: "Provando que funciona",
    text: "Chegou a executar serviços sem cobrar só para mostrar o resultado, de porta em porta em lojas, concessionárias e oficinas.",
  },
  {
    label: "O ponto fixo",
    title: "A oficina abre as portas",
    text: "O cliente passou a querer ir até ele. Com a loja aberta, veio a chance de oferecer estética automotiva completa.",
  },
  {
    label: "Out 2025",
    title: "Segunda unidade em Paraíso",
    text: "A Artesanal Car chega a Paraíso do Tocantins em sociedade com Glayson, irmão de Euler.",
  },
  {
    label: "Jun 2026",
    title: "Terceira unidade em Araguaína",
    text: "A operação começa em sociedade com Vitor, ex-colaborador da unidade de Palmas.",
  },
];

export const Story = () => (
  <section id="historia" className="section-light py-20 sm:py-28">
    <div className="container">
      <SectionHeading
        tone="light"
        eyebrow="Nossa história"
        title={
          <>
            Treze anos construídos{" "}
            <span className="shiny inline-block">carro por carro</span>
          </>
        }
        description="A Artesanal Car começou com um profissional, uma técnica pouco conhecida no Tocantins e muita insistência. Hoje são três unidades e uma equipe inteira formada dentro de casa."
      />
    </div>

    {/* Linha do tempo deitada: no desktop os cinco marcos dividem a largura e o
        fio corre atrás dos pontos; abaixo de lg vira rolagem lateral. */}
    <Reveal className="relative mt-14">
      <span className="pointer-events-none absolute inset-x-0 top-[5px] h-px bg-gradient-to-r from-transparent via-gold-700/35 to-transparent" />

      <ol className="no-scrollbar mx-auto flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 lg:grid lg:max-w-[1280px] lg:grid-cols-5 lg:overflow-visible">
        {TIMELINE.map((item) => (
          <li
            key={item.title}
            className="relative w-[250px] shrink-0 snap-start lg:w-auto"
          >
            <span className="relative z-10 block h-2.5 w-2.5 rounded-full bg-gold-500 ring-4 ring-[#F6F5F2]" />

            <span className="mt-5 inline-flex rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300">
              {item.label}
            </span>

            <h3 className="mt-3.5 text-lg font-bold leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/60">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Reveal>

    <div className="container">
      <Reveal delay={160}>
        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-3.5 rounded-[1.5rem] border border-gold-700/20 bg-white/70 px-7 py-6 text-center">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-gold-300">
            <Award className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-ink/60">
            <span className="mb-1 block text-[15px] font-bold text-ink">
              Certificação em Estética Automotiva
            </span>
            Equipe em treinamento técnico constante, do martelinho ao acabamento
            final.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
