// //Comentário de linha
// /**
//  * Comentário de Bloco.
//  */
// //Declarando uma variável e visualizando seu conteúdo.
// var nome = "Pedro"

// document.write("O valor da variável.")
// document.write("<br>")
// //Realizando concatenação
// document.write("NOME : " + nome)

// //Três tipos de dados iniciais do var

// //undefined
// var tipo1
// //Nulo
// var tipo2 = null
// //Vazio
// var tipo3 = ""

// //Problemas ao declarar tudo com var
// var nome = "Pedro"

// if(nome !=""){
//     let nome = "Rony"
// }
// console.log("NOME : " + nome)

//Capturar o elemento através do ID utilizando uma função do DOM
const h1Element = document.getElementById("meu-titulo")

//Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")
})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor ="#ff0000";
    h1Element.style.color ="#fff";
})

// h1Element.addEventListener("mouseout",()=>{
//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000000"
// })

let msg = null;

h1Element.addEventListener("mouseout", enviaMsg);
function enviaMsg(msg){
     
    //Parâmetro recebido e sendo verificado
    //SWITCH CASE

    const pElement = document.getElementById("p-msg");

    switch (msg) {
        case undefined:
                console.log("Foi enviada uma mensagem vazia!");
                pElement.textContent ="Foi enviada uma mensagem vazia!";
                return;
        case null:
                console.log("Foi enviada uma mensagem nula!");
                pElement.textContent = "Foi enviada uma mensagem nula!";
                return "Foi enviada uma mensagem nula!";
        case "":
                console.log("Foi enviada uma mensagem em branco!");
                pElement.textContent = "Foi enviada uma em branco!";
                return "Foi enviada uma mensagem em branco!";
        case "Bom dia amigos!":
                console.log("Bom dia amigos!");
                pElement.textContent = "Bom dia amigos!";
                return "Bom dia amigos!";
        default:
                console.error("Ocorreu um erro na transmissão!");
                pElement.textContent = "Ocorreu um erro na transmissão!";
                return "Ocorreu um erro na transmissão!";
    }

    return "SUCESSO!"
}

console.log("Esse é o retorno da minha função : " + enviaMsg(undefined));

