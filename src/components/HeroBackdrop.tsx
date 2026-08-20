/**
 * Fundo cinematográfico do hero: uma única foto em tela cheia com zoom lento e
 * contínuo, coberta por véus que garantem a leitura do título em qualquer tela.
 * O recorte vertical entra no celular, onde a versão em paisagem perderia o
 * enquadramento do profissional.
 */
export const HeroBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <picture>
      <source media="(max-width: 640px)" srcSet="/hero/hero-tall.jpg" />
      <img
        src="/hero/hero-wide.jpg"
        alt=""
        decoding="async"
        className="h-full w-full origin-center animate-slow-zoom object-cover object-center"
      />
    </picture>

    {/* véus de leitura */}
    <div className="absolute inset-0 bg-ink/28" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.92)_0%,rgba(13,13,13,0.38)_30%,rgba(13,13,13,0.50)_64%,rgba(13,13,13,0.96)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(62%_58%_at_50%_46%,rgba(13,13,13,0.60)_0%,rgba(13,13,13,0.24)_58%,transparent_100%)]" />

    {/* brilho dourado atrás do título */}
    <div className="absolute inset-0 bg-[radial-gradient(44%_38%_at_50%_42%,rgba(217,182,78,0.20)_0%,transparent_72%)]" />

    {/* vinheta lateral */}
    <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink/75 to-transparent sm:w-56" />
    <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink/75 to-transparent sm:w-56" />
  </div>
);
