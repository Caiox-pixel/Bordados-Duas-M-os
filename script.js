function irPara(pagina) {
    window.location.href = pagina;
}

const mensagens = [
    "Bordados sob encomenda!",
    "Kits de maternidade personalizados.",
    "Enviamos para todo o Brasil!",
    "Presenteie com carinho."
];

let indiceAtual = 0;
const elementoRotacao = document.getElementById("texto-rotacao");

function rotacionarConteudo() {
    if (!elementoRotacao) {
        return;
    }

    indiceAtual = (indiceAtual + 1) % mensagens.length;
    elementoRotacao.style.opacity = 0;

    setTimeout(() => {
        elementoRotacao.innerText = mensagens[indiceAtual];
        elementoRotacao.style.opacity = 1;
    }, 500);
}

if (elementoRotacao) {
    setInterval(rotacionarConteudo, 3000);
}
