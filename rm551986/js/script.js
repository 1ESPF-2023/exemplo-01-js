// //executando um teste 

// //Declarando uma variável 

// //var nome = "Gabriel"


// //document.write("o valor da variável. ")  
// //document.write("<br>")
// //document.write("Seu nome: " + nome)

// //Tres tipos iniciais de dados do var
// //undeefined
//                     //var tipo1 
// //null
//                     //var tipo2 = null
// //Vazio 
//                     //var tipo = 

// // Problemas ao declarar tudo com var
// var nome = "Pedro"

// if(nome != ""){
//     let = "Rony"
// }

// console.log("NOME : " + nome)

//Capturar o elemento através do id utilizando uma função do DOM 
const h1Element = document.getElementById("meu-titulo")
//Atrelar ou adiciionar o evento de clique do mouse ao elemento
h1Element.addEventListener("click",()=>{
    alert("Agora com super poderes!")
})

//Tem que se preocupar com a ordem de carrgamento topdown

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca

h1Element.addEventListener("mouseover",() =>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";

})

h1Element.addEventListener("mouseout" ,() =>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000";
})