# 🍕 Pizza Planet

Um cardápio interativo de pizzas com carrinho de compras funcional, desenvolvido em HTML, CSS e JavaScript (Vanilla).

## 📋 O que faz?

- **Exibe pizzas**: Mostra 5 pizzas diferentes com imagem, nome, preço e descrição
- **Adiciona ao carrinho**: Botão para adicionar produtos ao carrinho
- **Carrinho lateral**: Menu lateral que abre/fecha ao clicar no botão 🛒
- **Gerencia quantidade**: Aumenta ou diminui a quantidade de cada item
- **Calcula total**: Soma automática de todos os subtotais
- **Persiste dados**: Salva o carrinho no localStorage (não perde ao recarregar)

## 🗂️ Arquivos

| Arquivo | Função |
|---------|--------|
| `PizzaPlanet.html` | Estrutura (contém o carrinho lateral e overlay) |
| `planet.css` | Estilos (layout, cores, responsividade) |
| `Planet.js` | Lógica (criar produtos, gerenciar carrinho, calcular totais) |

## 🚀 Como usar?

1. Abra `PizzaPlanet.html` no navegador (duplo clique ou Live Server)
2. Clique em **"Adicionar ao Carrinho"** nos produtos
3. Clique no botão **🛒** (canto superior direito) para abrir o carrinho
4. Use **+** e **-** para alterar quantidades
5. O **Total** atualiza automaticamente

### Finalizar pedido

- Abra o carrinho (�) e clique em **Finalizar Pedido**; uma janela de checkout simples aparecerá mostrando:
	- lista dos itens selecionados (nome, quantidade, subtotal)
	- total em negrito
	- botão **Confirmar Pedido** que, por enquanto, exibe um alerta de confirmação e limpa o carrinho

> Observação: o checkout foi implementado como modal na própria página (sem criar arquivos novos).

## �🔧 Principais funções (JavaScript)

- `criarProduto()` - Cria cartão de pizza dinamicamente
- `adicionarAoCarrinho()` - Adiciona item ou incrementa quantidade
- `aumentarQuantidade()` / `diminuirQuantidade()` - Controla quantidade
- `atualizarCarrinhoNaTela()` - Atualiza exibição e calcula total
- `salvarCarrinho()` - Persiste no localStorage
- `carregarCarrinho()` - Recupera carrinho ao carregar página

## 🎨 Layout

- **Produtos**: Grid de 5 pizzas no topo
- **Carrinho lateral**: Menu fixo que desliza do lado direito
- **Overlay**: Fundo escuro ao abrir carrinho
- **Total**: Exibido em negrito após lista de itens

## ✅ Alterações recentes importantes

- Removida duplicidade de IDs do `lista-carrinho` (agora existe apenas um elemento usado pelo carrinho lateral).
- Implementado modal de checkout com `#checkout`, `#lista-checkout` e `#total-checkout`.
- Corrigido salvamento em `localStorage` (`JSON.stringify`) e carregamento do carrinho ao abrir a página.
- Ajustes de CSS para remover marcações indesejadas (ex.: barra azul nos itens) e para o modal de checkout.

## 💾 Armazenamento

O carrinho é salvo automaticamente no navegador (`localStorage`) e recuperado ao recarregar a página.

---


- transformar o modal de checkout em uma página separada (`checkout.html`),
- adicionar campos de endereço/contato no checkout,
- integrar com um back-end para enviar pedidos.
Diga qual opção prefere.

