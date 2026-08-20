import { useEffect, useRef, useState } from "react";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Artesanal+Car+Martelinho+de+Ouro+Palmas+TO";

const REVIEWS = [
  {
    name: "Antonio Melo",
    meta: "4 avaliações · 8 fotos",
    when: "11 meses atrás",
    text: "Serviço de altíssima qualidade e preço justo, compromisso e seriedade com o cliente. Deixei meu carro para fazer martelinho e vitrificação, mas recebi além do contratado, recebi com uma limpeza impecável, serviço esse que mesmo se fosse em um lava-jato não receberia.",
  },
  {
    name: "Felipe Soares",
    meta: "5 avaliações · 1 foto",
    when: "5 meses atrás",
    text: "Foi uma experiência ótima, atendimento de qualidade e serviço de qualidade. Recomendo, o Vitor e o Euler me atenderam super bem e foram muito prestativos. Serviço ficou perfeito.",
  },
  {
    name: "Rogerio Buriti",
    meta: "6 avaliações",
    when: "5 meses atrás",
    text: "Todos me trataram com muita educação e respeito, me explicaram o que iria ser feito e o preço foi do meu agrado, além de cumprirem com o prazo de entrega, recomendo.",
  },
  {
    name: "Heleno Moura Marques",
    meta: "3 avaliações",
    when: "5 meses atrás",
    text: "Gostei do serviço do atendimento, já é a segunda vez que levo carro lá e sempre fui bem atendido.",
  },
  {
    name: "Jose Rotary",
    meta: "7 avaliações",
    when: "5 meses atrás",
    text: "Atendimento muito bom, serviço de qualidade e dentro do prazo.",
  },
];

const GoogleMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("h-4 w-4", className)}
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1z"
    />
    <path
      fill="#EA4335"
      d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8z"
    />
  </svg>
);

const Stars = () => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
    ))}
  </span>
);

interface DepoimentoProps {
  review: (typeof REVIEWS)[number];
  index: number;
  aberto: number | null;
  setAberto: (i: number | null) => void;
}

/**
 * No celular o texto é limitado a 4 linhas para os cards não herdarem a altura
 * do depoimento mais longo. O botão "Ver mais" só aparece quando o texto
 * realmente transborda, medido no próprio elemento.
 */
const Depoimento = ({ review, index, aberto, setAberto }: DepoimentoProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [transborda, setTransborda] = useState(false);
  const expandido = aberto === index;

  useEffect(() => {
    const el = ref.current;
    if (!el || expandido) return;
    const checar = () => setTransborda(el.scrollHeight > el.clientHeight + 2);
    checar();
    window.addEventListener("resize", checar);
    return () => window.removeEventListener("resize", checar);
  }, [expandido]);

  return (
    <article className="card-dark group/card flex h-full min-h-[17.5rem] w-full flex-col gap-3.5 rounded-[1.6rem] p-6 sm:min-h-0 transition-colors duration-500 hover:border-gold-400/45 sm:gap-4 sm:p-7">
      <Quote className="h-6 w-6 shrink-0 text-gold-500/40 transition-colors duration-500 group-hover/card:text-gold-400/70 sm:h-7 sm:w-7" />

      <p
        ref={ref}
        className={cn(
          "text-pretty text-sm leading-relaxed text-white/72 sm:text-[15px]",
          !expandido && "line-clamp-4 sm:line-clamp-none"
        )}
      >
        {review.text}
      </p>

      {transborda && (
        <button
          type="button"
          onClick={() => setAberto(expandido ? null : index)}
          className="self-start text-[13px] font-bold text-gold-300 underline-offset-4 hover:underline sm:hidden"
        >
          {expandido ? "Ver menos" : "Ver mais"}
        </button>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-3.5 sm:pt-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{review.name}</p>
          <p className="truncate text-[11px] text-white/40">
            {review.meta} · {review.when}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <Stars />
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            <GoogleMark />
            Google
          </span>
        </div>
      </div>
    </article>
  );
};

export const Testimonials = () => {
  // Abrir um depoimento pausa o carrossel, senao o card foge do dedo.
  const [aberto, setAberto] = useState<number | null>(null);

  return (
  <section
    id="depoimentos"
    className="section-dark relative overflow-hidden rounded-b-[2rem] rounded-t-[2rem] py-20 sm:rounded-b-[2.75rem] sm:rounded-t-[2.75rem] sm:py-28"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(217,182,78,0.10)_0%,transparent_65%)]" />

    <div className="container relative">
      <SectionHeading
        eyebrow="Avaliações no Google"
        title={
          <>
            Quem deixa o carro aqui{" "}
            <span className="shiny">volta e indica</span>
          </>
        }
        description="Avaliações públicas reais de clientes das nossas unidades. Sem roteiro, sem ator, sem retoque."
      />
    </div>

    {/* Carrossel contínuo: a lista é duplicada e o deslocamento vai até -50%,
        o que faz o laço ser imperceptível. Passar o mouse pausa o movimento. */}
    <Reveal className="group relative mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent sm:w-24" />

      <ul
        className="flex w-max animate-marquee-x items-start gap-5 px-5 group-hover:[animation-play-state:paused] sm:items-stretch"
        style={{
          animationDuration: "62s",
          animationPlayState: aberto !== null ? "paused" : undefined,
        }}
      >
        {[...REVIEWS, ...REVIEWS].map((review, index) => (
          <li key={index} className="flex w-[260px] shrink-0 sm:w-[380px]">
            <Depoimento
              review={review}
              index={index}
              aberto={aberto}
              setAberto={setAberto}
            />
          </li>
        ))}
      </ul>
    </Reveal>

    <div className="container relative">
      <Reveal delay={120}>
        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer group inline-flex h-15 w-full items-center justify-center gap-3 rounded-full bg-gold-grad px-6 text-[15px] font-extrabold text-ink shadow-[0_20px_50px_-22px_rgba(217,182,78,0.9)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-7"
          >
            <GoogleMark className="h-5 w-5 shrink-0" />
            <span className="xs:hidden">Ver todas no Google</span>
            <span className="hidden xs:inline">
              Ver todas as avaliações no Google
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
  );
};
