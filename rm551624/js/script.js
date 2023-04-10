// //Comentário de linha

// /**
//  * comentário de bloco
//  */

// //Declarando uma variaável e visualizando seu conteúdo.
// var nome = "Thiago"
// document.write("O valor da variável.")
// document.write("<br>")
// //Realizando uma concatenação
// document.write("NOME : " + nome)
// document.write("<br>")

// // alert("Olá Mundo!")

// //3 tipos de dados iniciais do var

// //undefined
// var tipo1
// //nulo
// var tipo2 = null
// //vazio
// var tipo3 = ""

// //problemas ao declarar tudo com var
// var nome = "Thiago"

// if(nome != ""){
//     nome = "Rony"
// }

// console.log("NOME : " + nome)

//CAPTURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM
const h1Element = document.getElementById("meu-titulo")
 
//Atrelar ou adicionar o evento de click do mouse ao elemnto
h1Element.addEventListener("click", ()=>{
    alert("Agora com superpoderes!")
})
 
//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.
h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
    h1Element.style.width = "463px"
    h1Element.style.height = "50px"
})
 
// h1Element.addEventListener("mouseout", ()=>{ //arrow function, função anônima
//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000000"
// })

// h1Element.addEventListener("mouseout", alteraCorFundo)



// function name (params){} //parametro é algo que vc vai passar para a função. Pode ser qualquer elemento/tipo de dado
// function alteraCorFundo(){
//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000000"
// }

// let msg = "Bom dia amigos!";

// const pElement = document.getElementById("p-msg")

// function enviaMsg(msg){ 
//     //Parâmetro recebido e sendo verificado
//     //SWITCH CASE
//     switch (msg) {
//         case undefined:
//             console.log("Foi enviada uma mensagem indefinida!");
//             pElement.textContent = "Foi enviada uma mensagem indefinida!";
//             return "Foi enviada uma mensagem indefinida!";
//         case null:
//             console.log("Foi enviada uma mensagem nula!");
//             pElement.textContent = "Foi enviada uma mensagem nula!";
//             return "Foi enviada uma mensagem nula!";
//         case "":
//             console.log("Foi enviada uma mensagem vazia!");
//             pElement.textContent = "Foi enviada uma mensagem vazia!";
//             return "Foi enviada uma mensagem vazia!!";
//         case "Bom dia amigos!":
//             console.log("Bom dia amigos!");
//             pElement.textContent = "Bom dia amigos!"
//             return "Bom dia amigos!";
//         default:
//             console.error("Ocorreu um erro na transmissão!")
//             pElement.textContent = "Ocorreu um erro na transmissão!"
//             return "Ocorreu um erro na transmissão!";
//     }
//     //diferença de break e return : o break sai de dentro de um escopo menor, ou seja, sai de dentro do escopo do switch. Já o return sai do escopo total
// }

// console.log("Esse é o retorno da minha função: " + enviaMsg(null))
