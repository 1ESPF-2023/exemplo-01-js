// //Executando um teste

// //Declarando uma variável e visualizando seu conteúdo.
// var nome = "Pedro"

// document.write("O valor da variável.")
// document.write(nome)

//CAPTURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM
const h1Element = document.getElementById('meu-titulo');

//Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("mouseover",()=>{
    alert('Agora com superpoderes!');
})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.



h1Element.addEventListener("mouseover", () => {
    h1Element.style.backgroundColor = '#ff0000'
    h1Element.style.color = '#fff'
})

h1Element.addEventListener("mouseout", ()=>{
    h1Element.style.backgroundColor = '#fff'
    h1Element.style.color = '#000000'
})


