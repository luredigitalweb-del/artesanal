import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * LOGOS DAS MARCAS
 * Basta salvar o arquivo em `public/marcas/<slug>.svg` (ou `.png`) que a logo
 * aparece sozinha, sem precisar mexer no código. Enquanto o arquivo não existir,
 * o componente mostra o nome da marca em texto. Use fundo transparente: as
 * logos são pintadas de branco para ficarem uniformes sobre a faixa escura.
 */
const BRANDS = [
  { name: "Toyota", slug: "toyota" },
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Chevrolet", slug: "chevrolet" },
  { name: "Fiat", slug: "fiat" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Honda", slug: "honda" },
  { name: "Renault", slug: "renault" },
  { name: "Nissan", slug: "nissan" },
  { name: "Ford", slug: "ford" },
  { name: "Peugeot", slug: "peugeot" },
  { name: "Citroën", slug: "citroen" },
  { name: "Ram", slug: "ram" },
  { name: "Caoa Chery", slug: "caoa-chery", wide: true },
  { name: "BYD", slug: "byd", wide: true },
  { name: "GWM", slug: "gwm", wide: true },
  { name: "Volvo", slug: "volvo" },
  { name: "Land Rover", slug: "land-rover" },
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedes-benz" },
  { name: "Audi", slug: "audi" },
];

const BrandMark = ({
  name,
  slug,
  wide,
}: {
  name: string;
  slug: string;
  wide?: boolean;
}) => {
  // 0 tenta svg, 1 tenta png, 2 desiste e mostra o nome
  const [step, setStep] = useState(0);

  if (step > 1) {
    return (
      <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/40 sm:text-[11px]">
        {name}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        wide ? "h-[26px] w-[86px]" : "h-9 w-11 sm:h-10 sm:w-12"
      )}
    >
      <img
        src={`/marcas/${slug}.${step === 0 ? "svg" : "png"}`}
        alt={name}
        decoding="async"
        onError={() => setStep((current) => current + 1)}
        className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
      />
    </span>
  );
};

/**
 * Faixa de marcas atendidas. Fica ancorada no rodapé do hero, dentro da
 * primeira dobra, para o visitante ver a abrangência sem precisar rolar.
 */
export const BrandsMarquee = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative overflow-hidden border-t border-gold-700/25 bg-ink/75 py-2.5 backdrop-blur-md",
      className
    )}
  >
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-7 bg-gradient-to-r from-ink to-transparent sm:w-20" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-7 bg-gradient-to-l from-ink to-transparent sm:w-20" />

    <div className="flex w-max animate-marquee-x items-center gap-6 sm:gap-12">
      {[...BRANDS, ...BRANDS].map((brand, i) => (
        <span
          key={`${brand.slug}-${i}`}
          className="flex shrink-0 items-center gap-6 sm:gap-12"
        >
          <BrandMark name={brand.name} slug={brand.slug} wide={brand.wide} />
          <span className="h-1 w-1 shrink-0 rounded-full bg-gold-500/60" />
        </span>
      ))}
    </div>
  </div>
);
