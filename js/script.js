const links = document.querySelectorAll(".linkss a");


function ativarLink(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add("ativo")
    };
};

links.forEach(ativarLink);

// ativar

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);

    if (elemento){
        elemento.checked = true;
    };
}

parametro.forEach (ativarProduto);

//perguntas

const perguntas = document.querySelectorAll('.perguntas-c button')

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventoPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas)