// Executando um teste
/**
 * Comentário de Bloco
 */

// Declarando uma variável e visualizando seu conteúdo
//var nome = "Filipe"

// Realizando uma concatenação
//document.write("Nome: " + nome)

// Capturar o elemento através do id utilizando uma função do DOM
const h1element = document.getElementById('título');

// Atrelar ou adicionar o evento de click do mouse ao elemento
h1element.addEventListener('click', ()=>{
    alert('Agora com superpoderes!')
})

// Altere a cor de fundo do elemento quando ocorrer a passagem de mouse sobre o mesmo
// Coloque a cor do fundo na cor vermelha e a cor do texto na cor branca
h1element.addEventListener('mouseover', ()=>{
    h1element.style.backgroundColor = "#ff0000";
    h1element.style.color = "#fff";
})
h1element.addEventListener('mouseout', ()=>{
    h1element.style.backgroundColor = "#fff";
    h1element.style.color = "#000000"
})