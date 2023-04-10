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

// h1Element.addEventListener("mouseout" ,() =>{
//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000";
// })

h1Element.addEventListener("mouseout", alteraCorFundo) 

function alteraCorFundo(){
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000";
}

// let msg = undefined


// function enviaMsg(msg){

//     //Parametro recebido e sendo verificad
//     //SWITCH CASE

//     const pElement = document.getElementById("p-msg");

//     switch (msg) {
//         case undefined:
//             console.log("Foi enviada uma mensagem vazia!")
//             pElement.textContent = "Foi enviada uma mensagem vazia!"
//             return "Foi enviada uma mensagem vazia!";
//         case null:
//                 console.log("Foi enviada uma mensagem nula!")
//                 pElement.textContent = "Foi enviada uma mensagem nula!"
//             return "Foi enviada uma mensagem nula!";
//             case "":
//                 console.log("Foi enviada uma mensagem em branco!")
//                 pElement.textContent = "Foi enviada uma mensagem em branco!"
//             return "Foi enviada uma mensagem em branco!";
//         case "Bom dia amigos!":
//                 console.log("Bom dia amigo!")
//                 pElement.textContent = "Bom dia amigo!"
//             return "Bom dia amigo!";            
//         default:
//                 console.error("Ocorreu um erro na transmissão")
//                 pElement.textContent = "Ocorreu um erro na transmissão"
//             return "Ocorreu um erro na transmissão";                        
//     }


//     return "SUCESSO!";
//     // Esse cara foi moto pq ele nunca vai conseguir ser pego, um dos returns do switch vai ser ativado e, diferentemente do break, ao ser alcançado ele vai sair do escopo do switch e da função para ir direto para o escopo aberto até onde a função foi chamada
// }

// console.log("Esse é o retorno da minha função : " + enviaMsg(null)); 

// DIferença entre break e return

// break simplesmente sai de dentro de um escopo menor, sai de dentro do escopo do switch, se der o return ele vaiu sair de dentro do escopo total e vai para dentro de quem chamou a função, ele sai direto para ir até o escopo aberto, vai para quem chamou a função

