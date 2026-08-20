import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const DATA = [
  {
    to: 13,
    suffix: "",
    label: "anos cuidando de carros no Tocantins",
    curto: "anos no Tocantins",
  },
  {
    to: 480,
    suffix: "+",
    label: "veículos atendidos por mês nas 3 unidades",
    curto: "veículos por mês",
  },
  {
    to: 26,
    suffix: "",
    label: "colaboradores só na unidade de Palmas",
    curto: "colaboradores em Palmas",
  },
  {
    to: 3,
    suffix: "",
    label: "unidades: Palmas, Paraíso e Araguaína",
    curto: "unidades no estado",
  },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(to);
          return;
        }

        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

export const Numbers = () => (
  <section id="numeros" className="section-dark relative overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.75rem] rounded-b-[2rem] sm:rounded-b-[2.75rem] py-20 sm:py-24">
    <div className="absolute inset-0">
      <img
        src="/fotos/fachada.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-full w-full object-cover object-top opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0D0D0D_0%,rgba(13,13,13,0.82)_50%,#0D0D0D_100%)]" />
    </div>

    <div className="container relative">
      <Reveal className="text-center">
        <Eyebrow>Nossa estrutura em números</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold leading-[1.1] sm:text-4xl">
          Estrutura de <span className="shiny">centro automotivo</span>, cuidado
          de oficina de bairro
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-gold-400/18 bg-gold-400/12 lg:grid-cols-4">
        {DATA.map((item, i) => (
          <Reveal key={item.label} delay={i * 90}>
            <div className="flex h-full flex-col items-center gap-2.5 bg-ink px-4 py-7 text-center sm:gap-3 sm:px-6 sm:py-10">
              <p className="text-[2.6rem] font-extrabold tracking-tight text-gold-200 sm:text-5xl lg:text-[3.4rem]">
                <Counter to={item.to} suffix={item.suffix} />
              </p>
              <span className="h-px w-10 bg-gold-line" />
              <p className="max-w-[15rem] text-[13px] leading-relaxed text-white/58 sm:text-sm">
                <span className="sm:hidden">{item.curto}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mx-auto mt-10 max-w-2xl text-center font-thin text-lg italic leading-relaxed text-gold-100/85 sm:text-xl">
          “Quem dorme sonha, quem vive realiza.” — a frase que está na parede da
          nossa oficina desde o primeiro dia.
        </p>
      </Reveal>
    </div>
  </section>
);
