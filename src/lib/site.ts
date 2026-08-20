export const WHATSAPP_NUMBER = "5563999761040";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  hero: waLink(
    "Olá! Vim pelo site da Artesanal Car e quero um orçamento para o meu veículo."
  ),
  martelinho: waLink(
    "Olá! Quero um orçamento de Martelinho de Ouro (reparo de amassado sem pintura)."
  ),
  final: waLink(
    "Olá! Quero avaliar meu carro com a Artesanal Car e receber um orçamento."
  ),
  servico: (nome: string) =>
    waLink(`Olá! Quero um orçamento de ${nome} para o meu veículo.`),
  pacote: (nome: string) =>
    waLink(
      `Olá! Quero um orçamento do pacote ${nome} para o meu veículo.`
    ),
  unidade: (cidade: string) =>
    waLink(`Olá! Quero atendimento na unidade de ${cidade}.`),
};

export const INSTAGRAM_URL = "https://instagram.com/artesanalcar.martelinho";
export const SITE_PHONE = "(63) 99976-1040";
