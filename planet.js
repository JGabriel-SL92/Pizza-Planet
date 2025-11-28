let produtos = []
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

produto.appendChild(img);
produto.appendChild(nomeEl);
produto.appendChild(precoEl);
produto.appendChild(descricaoEl);

document.getElementById("produtos").appendChild(produto);

produto.classList.add("produto");

}
window.dowload = function() {
 criarProduto(
    "https://imgs.search.brave.com/c9afdE4YXRoxUbBmq_P5m-42qpxfjO-MtewylEVwqEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLWRlLWNh/bGFicmVzYS1mYWNp/bC1jYXBhLmpwZw"
    ,"Pizza de calabresa"
    ,"39,90"
    ,"Pizza sabor calabresa de massa fina com cebola, orégano e azeitonas pretas."
 );

};