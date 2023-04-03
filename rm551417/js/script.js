// //Executando um teste.

// //Declarando uma variável e visualizando seu conteúdo.
// // var nome = "Tomáz"

// // document.write("O valor da variável é:")
// // document.write("<br>")
// // //Realizando uma concatenação.
// // document.write("Nome: " + nome)

// //Três tipos de dados iniciais do var
// //undefined
// var tipo1
// //null
// var tipo2 = null
// //vazio
// var tipo3 = ""

// //Problemas ao declarar tudo com var
// var nome = "Tomáz"

// if(nome != ""){
//     let nome = "Rony"
// }

// console.log("Nome: " + nome)

// /*1 -Como declarar uma variável com valor undefined em JavaScript?
// Exemplifique e demonstre a saída do valor da variável!*/

// let variavel
// console.log("Valor da variável " + variavel)



//Capturar o elemento através do ID utilizando uma função do DOM (document pertence ao DOM)
const h1Element = document.getElementById("meu-titulo");

//Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")
})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.

h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#ffffff";
})

h1Element.addEventListener("mouseout",()=>{
    h1Element.style.backgroundColor = "#ffffff";
    h1Element.style.color = "#000000";
})