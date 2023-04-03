//Comentário de Linha
/**
 * Comentário de Bloco
 */


// document.write("O valor da variável.")
// document.write("<br>")
// //Realizando uma concatenação
// document.write("NOME : " + nome)

//Declarando uma variável e visualizando seu conteúdo.
// var nome

//Três tipos de dados iniciais do var

// //undefined
// //var tipo1
// //Nulo
// //var tipo2 = null
// //Vazio
// //var tipo3 = ""

// //Problemas ao delcarar tudo com var
// //var nome = "Pedro"

// if(nome != ""){
//     let nome = "Rony"
// }

// console.log("NOME : " + nome)

const h1Element = document.getElementById('meu-titulo');

//atrelar ou adicionar o evento de clic do mouse ao elemento

h1Element.addEventListener("click", ()=>{
    alert("agora com superpoderes ")

})

// altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento
//coloque a cor de fundo na cor vermelha e a do texto na cor branca 
h1Element.addEventListener("mouseover", ()=>{

    h1Element.style.backgroundColor = "#ff0000"
    h1Element.style.color = "#fff"
})

h1Element.addEventListener("mouseout", ()=>{

    h1Element.style.backgroundColor = "#fff"
    h1Element.style.color = "#000000"
})



