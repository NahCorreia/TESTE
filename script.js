// Função para redirecionar para a página de produtos
function irParaProdutos() {
    window.location.href = "produtos.html";
}

// Função para simular uma busca de produtos
function buscarProduto() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        alert("Você pesquisou por: " + query);
    } else {
        alert("Por favor, insira um termo para pesquisar.");
    }
}

// Função para simular a exibição do carrinho
function verCarrinho() {
    alert("Carrinho de compras vazio!");
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    alert(nomeProduto + " foi adicionado ao carrinho.");
}