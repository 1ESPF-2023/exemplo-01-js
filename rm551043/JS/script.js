//comentario de linha
/**
 * comentario de bloco
 */

//Delarando uma variavel e visualizando seu conteudos 
// capturar o elemento atraves do id utilizando uma função do DOM

const h1Element = document.getElementById("meu_titulo")

// atrelar ou adicionar o evento de click do mouse ao elemento 

h1Element.addEventListener("click",()=>{
    alert("agora com super poderes")
})
// altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
// Coloque a cor de fundo na cor vermelha e a cor do texto em branco
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
})
h1Element.addEventListener("mouseout",()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000";
})