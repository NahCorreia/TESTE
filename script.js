let slideIndex = 0;
showslides ();

function showslides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides [i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout (showslides, 3000);
}

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