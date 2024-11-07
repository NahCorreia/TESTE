function irParaProdutos() {
    window.location.href = "produtos.html";
}

function buscarProduto() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        alert("Você pesquisou por: " + query);
    } else {
        alert("Por favor, insira um termo para pesquisar.");
    }
}

function verCarrinho() {
    alert("Carrinho de compras vazio!");
}

function adicionarAoCarrinho(nomeProduto) {
    alert(nomeProduto + " foi adicionado ao carrinho.");
}