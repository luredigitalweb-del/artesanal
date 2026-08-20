import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="section-dark flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
    <img src="/logo.png" alt="Artesanal Car" className="h-24 w-auto" />
    <h1 className="text-4xl font-bold">
      Página <span className="shiny">não encontrada</span>
    </h1>
    <p className="max-w-md text-muted-foreground">
      O endereço que você acessou não existe. Volte para a página inicial e fale
      com a nossa equipe.
    </p>
    <Link
      to="/"
      className="shimmer rounded-full bg-gold-grad px-8 py-3 font-bold text-ink"
    >
      Voltar ao início
    </Link>
  </main>
);

export default NotFound;
