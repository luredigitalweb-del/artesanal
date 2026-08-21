export const WHATSAPP_NUMBER = "5563999761040";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  hero: waLink(
    "Olá! Vim pelo site e quero agendar um horário para o meu veículo."
  ),
  martelinho: waLink(
    "Olá! Quero agendar o Martelinho de Ouro (reparo de amassado sem pintura)."
  ),
  final: waLink(
    "Olá! Quero agendar meu horário na Artesanal Car."
  ),
  servico: (nome: string) =>
    waLink(`Olá! Quero agendar ${nome} para o meu veículo.`),
  pacote: (nome: string) =>
    waLink(
      `Olá! Quero agendar o pacote ${nome} para o meu veículo.`
    ),
  unidade: (cidade: string) =>
    waLink(`Olá! Quero agendar atendimento na unidade de ${cidade}.`),
};

export const INSTAGRAM_URL = "https://instagram.com/artesanalcar.martelinho";
export const SITE_PHONE = "(63) 99976-1040";
