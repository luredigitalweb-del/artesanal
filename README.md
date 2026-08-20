# Artesanal Car — Landing Page

Landing page de vendas e conversão para a Artesanal Car (Martelinho de Ouro e estética automotiva em Palmas, Paraíso e Araguaína/TO).

## Stack

Mesma stack usada pelo Lovable:

- Vite + React 18 + TypeScript
- Tailwind CSS 3 (tokens em `src/index.css`, tema em `tailwind.config.ts`)
- shadcn/ui (primitivo `Button` em `src/components/ui/button.tsx`, `cn` em `src/lib/utils.ts`)
- React Router + TanStack Query
- lucide-react para ícones

## Rodando

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # gera /dist
npm run preview
```

## Estrutura

```
public/
  logo.png                  logo oficial (fundo transparente)
  fotos/                    fotos reais da operação
  instagram/                perfil, destaques e posts recortados do Instagram
  fonts/                    Montserrat ExtraLight Italic (fonte enviada pelo cliente)
src/
  pages/Index.tsx           ordem das seções da página
  components/               uma seção por arquivo
  lib/site.ts               número de WhatsApp e mensagens pré-preenchidas
```

## Identidade visual

Paleta oficial da marca (`Paleta de Cores.png`), aplicada em `tailwind.config.ts`:

| Token | Hex | Uso |
| --- | --- | --- |
| `gold-200` | `#F2CB57` | destaques e texto dourado sobre preto |
| `gold-400` | `#D9B64E` | bordas, filetes e ícones |
| `gold-700` | `#8C6418` | dourado escuro, texto sobre fundo claro |
| `ink` | `#0D0D0D` | seções escuras |
| `brandgreen` | `#23A60F` | reservado (cor institucional secundária) |

Tipografia: Montserrat (Google Fonts) como família principal, mais a fonte enviada
pelo cliente (`Montserrat-ExtraLightItalic.ttf`) carregada via `@font-face` na classe
`font-thin`, usada nas citações e frases institucionais.

## Efeitos

- `.shiny` — varredura de brilho dourado aplicada nas palavras destacadas de cada título.
  Em seções claras a classe `.section-light` troca automaticamente o gradiente por
  tons mais escuros para manter o contraste.
- `.shimmer` — brilho diagonal que percorre os botões em loop. `.shimmer-dark` é a
  variante dourada, para botões de contorno.
- `.reveal` — entrada suave por IntersectionObserver (componente `Reveal`).
- Todos os efeitos são desligados em `prefers-reduced-motion: reduce`.

## Seções

Alternância preto / branco, com detalhes e textos dourados:

1. Hero (preto) — proposta de valor e CTA principal
2. Faixa de marcas atendidas
3. Serviços (branco) — 5 prioritários + demais serviços
4. Martelinho de Ouro (preto) — processo em 4 etapas
5. Diferenciais (branco)
6. Números (preto) — contadores animados
7. Instagram (branco) — simulador de iPhone com o perfil rolável
8. Depoimentos do Google (preto)
9. Nossa história (branco) — linha do tempo
10. Unidades (preto)
11. CTA final (branco) + rodapé (preto)

## Simulador de Instagram

`src/components/InstagramPhone.tsx` recria a interface do perfil
`@artesanalcar.martelinho` dentro de um iPhone com moldura dourada. O conteúdo rola
de verdade dentro da tela (`overflow-y-auto`), com cabeçalho fixo, destaques com
rolagem horizontal e grade de 15 publicações reais recortadas dos prints enviados.

O aparelho é sempre desenhado com 348px de largura e reduzido por `transform: scale`
nas telas menores, para que as proporções da interface fiquem idênticas em qualquer
dispositivo.

## SEO local

O `index.html` traz dados estruturados `AutoBodyShop` (schema.org) com endereço
completo da matriz, telefone, horários e as três cidades atendidas, para o Google
exibir essas informações direto na busca.

## Conversão

Todos os CTAs apontam para o WhatsApp `63 99976-1040`, com mensagem pré-preenchida
por contexto (serviço, unidade, orçamento geral). Para trocar o número ou os textos,
edite apenas `src/lib/site.ts`.
