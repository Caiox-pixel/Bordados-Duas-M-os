// Função para navegar entre páginas
function irPara(pagina) {
    window.location.href = pagina;
}

// Lógica do Carrossel (Rotação de Imagens)
const mensagens = [
    "Confira nossas ofertas de Verão! ☀️",
    "Frete grátis em compras acima de R$ 150 🚚",
    "Novos produtos adicionados hoje! ✨",
    "Parcele em até 12x sem juros 💳"
];

let indiceAtual = 0;
const elementoRotacao = document.getElementById("texto-rotacao");

function rotacionarConteudo() {
    indiceAtual = (indiceAtual + 1) % mensagens.length;
    
    // Pequeno efeito de transição
    elementoRotacao.style.opacity = 0;
    
    setTimeout(() => {
        elementoRotacao.innerText = mensagens[indiceAtual];
        elementoRotacao.style.opacity = 1;
    }, 500);
}

// Inicia a rotação a cada 3 segundos
if (elementoRotacao) {
    setInterval(rotacionarConteudo, 3000);
}
