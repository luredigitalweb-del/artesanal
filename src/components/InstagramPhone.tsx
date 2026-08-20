import {
  ChevronLeft,
  MoreHorizontal,
  Hammer,
  Sparkles,
  MapPin,
  Link2,
  UserPlus,
  Grid3x3,
  Play,
  Repeat2,
  Contact,
} from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/site";

const POSTS = Array.from({ length: 15 }, (_, i) => ({
  src: "/instagram/post-" + String(i + 1).padStart(2, "0") + ".jpg",
  reel: i === 4 || i > 5,
}));

const HIGHLIGHTS = [
  { src: "/instagram/hl-1.jpg", label: "Time" },
  { src: "/instagram/hl-2.jpg", label: "Serviço" },
  { src: "/instagram/hl-3.jpg", label: "Insulfilm" },
  { src: "/instagram/hl-4.jpg", label: "Café empre..." },
  { src: "/instagram/hl-5.jpg", label: "Brindes" },
];

const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" role="img" aria-label="Verificado">
    <path
      fill="#3897F0"
      d="M12 1.5l2.2 2.1 3-.3.9 2.9 2.7 1.4-1 2.9 1 2.9-2.7 1.4-.9 2.9-3-.3L12 22.5l-2.2-2.1-3 .3-.9-2.9L3.2 16.4l1-2.9-1-2.9L5.9 9.2l.9-2.9 3 .3z"
    />
    <path fill="#fff" d="M10.9 15.3l-3-3 1.1-1.1 1.9 1.9 4.1-4.1 1.1 1.1z" />
  </svg>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center leading-tight">
    <span className="text-[15px] font-bold text-white">{value}</span>
    <span className="text-[12px] text-white/70">{label}</span>
  </div>
);

/**
 * O aparelho é desenhado sempre em 348px de largura (medida real do iPhone)
 * e reduzido por transform nas telas menores, para que a interface interna do
 * Instagram mantenha exatamente as mesmas proporções em qualquer dispositivo.
 */
export const InstagramPhone = () => (
  <div className="relative mx-auto h-[604px] w-[290px] sm:h-[679px] sm:w-[326px] lg:h-[724px] lg:w-[348px]">
    <div className="absolute left-0 top-0 w-[348px] origin-top-left scale-[0.8333] sm:scale-[0.9368] lg:scale-100">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(217,182,78,0.30)_0%,transparent_68%)] blur-2xl" />

        <span className="absolute -left-[3px] top-[128px] h-14 w-[3px] rounded-l-sm bg-gradient-to-b from-gold-600 to-gold-800" />
        <span className="absolute -left-[3px] top-[194px] h-14 w-[3px] rounded-l-sm bg-gradient-to-b from-gold-600 to-gold-800" />
        <span className="absolute -right-[3px] top-[166px] h-20 w-[3px] rounded-r-sm bg-gradient-to-b from-gold-500 to-gold-800" />

        <div className="gold-frame rounded-[3.1rem] p-[3px] shadow-[0_50px_100px_-45px_rgba(0,0,0,0.9)]">
          <div className="rounded-[2.95rem] bg-[#0a0a0a] p-[9px]">
            <div className="relative overflow-hidden rounded-[2.35rem] bg-black">
              <div className="pointer-events-none absolute left-1/2 top-[9px] z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

              <div className="phone-scroll h-[700px] overflow-y-auto overscroll-contain">
            <div className="sticky top-0 z-20 bg-black/95 backdrop-blur">
              <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[12px] font-semibold text-white">
                <span>12:42</span>
                <span className="flex items-center gap-1.5 text-[10px]">
                  <span className="flex items-end gap-[2px]">
                    <i className="block h-[4px] w-[3px] rounded-[1px] bg-white" />
                    <i className="block h-[6px] w-[3px] rounded-[1px] bg-white" />
                    <i className="block h-[8px] w-[3px] rounded-[1px] bg-white" />
                    <i className="block h-[10px] w-[3px] rounded-[1px] bg-white/40" />
                  </span>
                  4G
                  <span className="ml-0.5 flex h-[11px] w-[21px] items-center rounded-[3px] border border-white/50 p-[1.5px]">
                    <i className="block h-full w-[87%] rounded-[1px] bg-white" />
                  </span>
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-2.5">
                <ChevronLeft className="h-5 w-5 shrink-0 text-white" />
                <span className="flex items-center gap-1.5 text-[14px] font-semibold text-white">
                  artesanalcar.martelinho
                  <VerifiedBadge />
                </span>
                <MoreHorizontal className="h-5 w-5 shrink-0 text-white" />
              </div>
            </div>

            <div className="px-4 pt-3">
              <div className="flex items-center gap-5">
                <span className="grid h-[84px] w-[84px] shrink-0 place-items-center rounded-full bg-[conic-gradient(from_210deg,#F2CB57,#8C6418,#F2CB57,#FBF3DA,#D9B64E,#F2CB57)] p-[2.5px]">
                  <span className="grid h-full w-full place-items-center rounded-full bg-black p-[2.5px]">
                    <img
                      src="/instagram/avatar.jpg"
                      alt="Foto de perfil da Artesanal Car"
                      loading="lazy"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                </span>

                <div className="flex flex-1 justify-around">
                  <Stat value="1.246" label="posts" />
                  <Stat value="3.588" label="seguidores" />
                  <Stat value="2.188" label="seguindo" />
                </div>
              </div>

              <div className="mt-3.5 text-[13px] leading-[1.5] text-white">
                <p className="font-semibold">Artesanal Car | Martelinho de Ouro</p>
                <p className="mt-0.5 text-white/45">Serviço automotivo</p>
                <p className="mt-1.5 flex items-center gap-1.5">
                  <Hammer className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  Martelinho de ouro
                </p>
                <p className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  Vitrificação • Pintura • Polimento
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  Palmas – 402 Sul Av. LO 11
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  Paraíso – Av. Machado de Assis 1019
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  Araguaína – unidade nova
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-[#4a9de0]">
                  <Link2 className="h-3.5 w-3.5 shrink-0" />
                  wa.me/+5563999761040
                </p>
              </div>

              <div className="mt-3.5 flex items-center gap-1.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[34px] flex-1 items-center justify-center rounded-lg bg-[#4a5cf7] text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Seguir
                </a>
                <span className="flex h-[34px] flex-1 items-center justify-center rounded-lg bg-[#262626] text-[13px] font-semibold text-white">
                  Mensagem
                </span>
                <span className="flex h-[34px] flex-1 items-center justify-center rounded-lg bg-[#262626] text-[13px] font-semibold text-white">
                  Contato
                </span>
                <span className="grid h-[34px] w-9 shrink-0 place-items-center rounded-lg bg-[#262626] text-white">
                  <UserPlus className="h-4 w-4" />
                </span>
              </div>

              <div className="no-scrollbar -mx-4 mt-4 flex gap-4 overflow-x-auto px-4 pb-1">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="flex w-16 shrink-0 flex-col items-center gap-1.5">
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 p-[2px]">
                      <img
                        src={item.src}
                        alt={item.label}
                        loading="lazy"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </span>
                    <span className="w-full truncate text-center text-[11px] text-white/85">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 border-t border-white/12">
              <span className="relative flex justify-center py-2.5 text-white">
                <Grid3x3 className="h-5 w-5" />
                <i className="absolute inset-x-4 -top-px h-0.5 rounded-full bg-white" />
              </span>
              <span className="flex justify-center py-2.5 text-white/45">
                <Play className="h-5 w-5" />
              </span>
              <span className="flex justify-center py-2.5 text-white/45">
                <Repeat2 className="h-5 w-5" />
              </span>
              <span className="flex justify-center py-2.5 text-white/45">
                <Contact className="h-5 w-5" />
              </span>
            </div>

            <div className="grid grid-cols-3 gap-[2px] pb-6">
              {POSTS.map((post, i) => (
                <a
                  key={post.src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[3/4] overflow-hidden bg-[#111]"
                >
                  <img
                    src={post.src}
                    alt={"Publicação " + (i + 1) + " do Instagram da Artesanal Car"}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-1.5 top-1.5 text-white drop-shadow">
                    {post.reel ? (
                      <Play className="h-3.5 w-3.5 fill-white" />
                    ) : (
                      <span className="block h-3 w-3 rounded-[3px] border-[1.5px] border-white" />
                    )}
                  </span>
                </a>
              ))}
            </div>

                <div className="sticky bottom-0 flex justify-center bg-gradient-to-t from-black via-black/85 to-transparent pb-2 pt-5">
                  <span className="h-1 w-28 rounded-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
