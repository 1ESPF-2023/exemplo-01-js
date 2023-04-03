// capturar o elemento atravês e visualizando seu conteudo

const h1Element = document.getElementById("meu_titulo")
//atrelar ou adicionar o evento de clique
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
})
h1Element.addEventListener("mouseout",()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000";
})


