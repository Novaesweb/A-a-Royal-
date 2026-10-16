# Açaí Royal — NovaesWeb

Site de açaí em React + TypeScript + Tailwind CSS, visual roxo premium, mobile-first.

## Executar

```bash
npm install
npm run dev
```

Produção: `npm run build` gera `dist/`. No Vercel, importe o repositório, use o preset Vite e `npm run build`.

## Personalizar a loja

Edite `src/data.ts`:
- `store.phone`: **obrigatório para finalizar pedidos**. Insira DDI + DDD + número, só dígitos, por exemplo `5551999999999` (exemplo fictício). Enquanto vazio, o checkout informa que falta configurar, sem enviar pedidos para terceiro.
- `store.name`, `address`, `hours`, `instagram`, `acceptingOrders`, `minOrder`.
- `products`: nomes, preços, tamanhos, descrições e emojis demonstrativos.
- `extras`: adicionais e preços demonstrativos (0 = grátis).
- `neighborhoods`: bairros e taxas demonstrativas. Para outros bairros use `consult:true` (não permite concluir sem taxa definida).
- `promotions`: destaques da página.

## Experiência

- Página principal: `/` — hero, promoções, cardápio, montagem de açaí, carrinho e checkout por WhatsApp.
- Guia interativo: `/recursos` — explicações clicáveis, simulador independente de preços, funcionalidades futuras.
- Carrinho no `localStorage`, sem banco de dados. Os dados pessoais do checkout permanecem apenas na memória da página, sem armazenamento persistente.
- Produtos e taxas são apenas demonstração. O preço da promoção **não** representa desconto, é destaque de produtos. Não há cupom automático ou agendamento nesta versão.
- Ao concluir, uma URL `https://wa.me/...` é aberta com uma mensagem pronta. O cliente precisa enviar a mensagem manualmente; não é confirmação de pedido.
- Não há pagamento online nem validação de horário automática. Ajuste `acceptingOrders` manualmente.
- Crédito no rodapé: **Feito por NovaesWeb**.

## Antes de publicar

1. Troque nome/endereço/horários e fotos/ícones demonstrativos pelos dados reais.
2. Configure o número oficial de WhatsApp da loja em `src/data.ts`.
3. Revise todos os preços, adicionais e bairros.
4. Faça um pedido de teste e confira o texto no WhatsApp.
5. Publique na Vercel; `vercel.json` configura fallback de rotas SPA.

Desenvolvido como demonstração NovaesWeb.
