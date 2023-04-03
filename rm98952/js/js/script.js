// //Executando um teste

// //Declarando uma variável e visualizando seu conteúdo
// var nome = "Rodrigo" /* var para setar as variáveis*/

// document.write("O valor da variável.")
// //realizando uma concatenação
// document.write("NOME : " + nome )

// //três tios de dados iniciais  do vara
// //undefined
// var tipo1
// //nulo
// var tipo2 = null
// //vazio
// var tipo3 = ''
// //problemas ao declarar tudo com var
// var nome = "Pedro"

// if(nome != ""){
//     let nome = "Rony"
// }

// console.log ("NOME : " + nome)

//1 - Como declarar uma variável undefined em Javascript
// let variável
//console.log(variável)
// <a href="https:www.fiap.com.br">Fiap</a>


//CApturar o elementos através do ID utilizando uma função do DOM
const h1Element = document.getElementById("meu-título");
//Atrelar ou adicionar o evento de click do bmouse ao elemento, 
h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")

})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto da cor branca.
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";

})
h1Element.addEventListener("mouseout",()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000";
})