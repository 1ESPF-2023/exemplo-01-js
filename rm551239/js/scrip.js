//Executando um teste/Comentario de linha
/**
*Comentario de Bloco
*/
//Declarando uma váriavel e visualisando seu conteudo
// var nome = "Miguel"

// document.write("O valor da variável ")
// //Realizando uma concatenação
// document.write("NOME : " + nome)

//Três tipos de dados iniciais do var
//undefined
// var tipo1 
// //nulo
// var tipo2 = null
// //vazio
// var tipo3 =""

// //Problemas ao declarar tudo com var
// var nome = "Miguel"

// if(nome != ""){
// var nome = "Rony"
// }
// console.log("Nome: " + nome)

//capturar o elemento atravez do id utilizando uma finção do 
const h1Element = document.getElementById("meu-titulo");
    
//Atrelar ou adicionar  evento de click do mouse ao elemento
h1Element.addEventListener("click",()=>{
    alert("Agora com super poderes!")
})

//Altere a cor do fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca

h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = '#ff0000';
    h1Element.style.color = '#fff';
})
h1Element.addEventListener("mouseout",()=>{
    h1Element.style.backgroundColor = '#fff';
    h1Element.style.color = '#000000';
})
