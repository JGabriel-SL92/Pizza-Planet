const carrinho = [];
console.log("Script carregado com sucesso!");

function criarProduto(imagemURL, nome, preco, descricao){

const produto = document.createElement("div");
produto.classList.add("produto");

const img = document.createElement('img');
img.src = imagemURL;
img.alt = descricao;

const nomeEl = document.createElement("h2");
nomeEl.textContent = nome;

const precoEl = document.createElement('p');
precoEl.textContent = "Preço : R$" + preco;

const descricaoEl = document.createElement("p");
descricaoEl.textContent = descricao;

/**botão do produto*/
const btnCarrinho = document.createElement("button");
btnCarrinho.textContent = "Adicionar ao Carrinho";

btnCarrinho.onclick = function(){
   
    adicionarAoCarrinho(nome.trim(), preco);
};

produto.appendChild(img);
produto.appendChild(nomeEl);
produto.appendChild(precoEl);
produto.appendChild(descricaoEl);
produto.appendChild(btnCarrinho);
document.getElementById("produtos").appendChild(produto);

produto.classList.add("produto");

}
 

function adicionarAoCarrinho(nome, preco) {

    const precoNum = Number(String(preco).replace(',', '.'));

    
    const item = carrinho.find(prod => prod.nome === nome);

    if (item) {
     
        item.quantidade = (item.quantidade || 0) + 1;
    } else {
        carrinho.push({
            nome: nome,
            preco: isNaN(precoNum) ? 0 : precoNum,
            quantidade: 1
        });
    }
    salvarCarrinho();
    atualizarCarrinhoNaTela();
}

function aumentarQuantidade(index) {
    carrinho[index].quantidade++;
    atualizarCarrinhoNaTela();
    salvarCarrinho();
}

function diminuirQuantidade(index) {
    carrinho[index].quantidade--;

   
    if (carrinho[index].quantidade === 0) {
        carrinho.splice(index, 1);
    }

    atualizarCarrinhoNaTela();
    salvarCarrinho();
}

function atualizarCarrinhoNaTela() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

    let total = 0;
    carrinho.forEach((item, index) => {
        const subtotal = (item.preco * item.quantidade).toFixed(2);
        total += item.preco * item.quantidade;

        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.nome}</strong><br>
            Preço: R$ ${item.preco}<br>
            Quantidade: 
            <button onclick="diminuirQuantidade(${index})">–</button>
            ${item.quantidade}
            <button onclick="aumentarQuantidade(${index})">+</button><br>
            <span>Subtotal: R$ ${subtotal}</span>
        `;

        lista.appendChild(li);
    });

 
    
    const oldTotals = document.querySelectorAll('#total-carrinho');
    oldTotals.forEach(el => el.remove());

    
    const totalEl = document.createElement("div");
    totalEl.id = "total-carrinho";
    totalEl.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    lista.after(totalEl);
}

/* --- Checkout: mostrar resumo e confirmar pedido --- */
function mostrarCheckout(){
    const checkout = document.getElementById('checkout');
    const lista = document.getElementById('lista-checkout');
    const totalEl = document.getElementById('total-checkout');
    lista.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        const subtotal = (item.preco * item.quantidade).toFixed(2);
        li.innerHTML = `${item.nome} — ${item.quantidade} x R$ ${item.preco} = R$ ${subtotal}`;
        lista.appendChild(li);
        total += item.preco * item.quantidade;
    });

    totalEl.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    checkout.classList.add('aberto');
}

function fecharCheckout(){
    const checkout = document.getElementById('checkout');
    checkout.classList.remove('aberto');
}

function confirmarPedido(){
    // aqui pode-se integrar pagamento/externo; por enquanto limpa o carrinho
    if (carrinho.length === 0) {
        alert('Carrinho vazio.');
        return;
    }
    // confirma (simples) e limpa
    alert('Pedido confirmado! Total: ' + document.getElementById('total-checkout').innerText.replace('Total: ', ''));
    carrinho.length = 0; // limpa array
    salvarCarrinho();
    atualizarCarrinhoNaTela();
    fecharCheckout();
}
 function salvarCarrinho(){
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
 }

 function carregarCarrinho(){
   const carrinhoSalvo = localStorage.getItem("carrinho");

   if (carrinhoSalvo){
      carrinho.push(...JSON.parse(carrinhoSalvo));
      atualizarCarrinhoNaTela();
   }
 }
/**apresenta o carrinho ao carregar a página */
window.onload = function() {
   carregarCarrinho();
   
/*criação dos produtos*/
   console.log("window.onload executado");
   criarProduto(
    "https://imgs.search.brave.com/c9afdE4YXRoxUbBmq_P5m-42qpxfjO-MtewylEVwqEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLWRlLWNh/bGFicmVzYS1mYWNp/bC1jYXBhLmpwZw"
    ,"Pizza de calabresa"
    ,"39,99"
    ,"Pizza sabor calabresa de massa fina com cebola, orégano e azeitonas pretas."
 );
  
   criarProduto(
    "https://sabores-new.s3.amazonaws.com/public/2024/11/pizza-de-frango-1-1024x494.webp"
    ,"Pizza de Frango"
    ,"39,99"
    ,"Pizza sabor frango de massa fina com requeijão, orégano e azeitonas."
 );
 
   criarProduto(
    "https://italica.com.br/wp-content/uploads/2023/12/Pizza-napoletana-1024x683.jpg"
    ,"Pizza Napolitana"
    ,"39,99"
    ,"Pizza sabor frango de massa fina com requeijão, orégano e azeitonas."
 );
      
   criarProduto(
    "https://img.cdndsgni.com/preview/10005781.jpg",
    "Pizza Pepperoni",
    "42,90",
    "Fatias de pepperoni levemente picante sobre queijo mussarela derretido e molho de tomate especial."
);

   criarProduto(
    "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/11542/669add55f2312jhfb8.webp",
    "Pizza de Carne de Sol",
    "45,90",
    "Carne de sol desfiada com manteiga da terra, queijo coalho e cebolas caramelizadas."
);

   document.getElementById("btn-carrinho").onclick = function () {
      document.getElementById("carrinho-lateral").classList.add("aberto");
      document.getElementById("overlay").classList.add("ativo");
   };

   document.getElementById("fechar-carrinho").onclick = function () {
      document.getElementById("carrinho-lateral").classList.remove("aberto");
      document.getElementById("overlay").classList.remove("ativo");
   };

   document.getElementById("overlay").onclick = function () {
      document.getElementById("carrinho-lateral").classList.remove("aberto");
      document.getElementById("overlay").classList.remove("ativo");
   };
   
   const btnFinalizar = document.getElementById('finalizar-pedido');
   if (btnFinalizar) {
       btnFinalizar.onclick = function(){
           // fecha o carrinho lateral e abre o checkout
           document.getElementById('carrinho-lateral').classList.remove('aberto');
           document.getElementById('overlay').classList.remove('ativo');
           mostrarCheckout();
       };
   }


   const fecharCheckoutBtn = document.getElementById('fechar-checkout');
   if (fecharCheckoutBtn) fecharCheckoutBtn.onclick = fecharCheckout;

   const confirmarBtn = document.getElementById('confirmar-pedido');
   if (confirmarBtn) confirmarBtn.onclick = confirmarPedido;
};