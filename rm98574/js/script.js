//Comentário de Linha
/**
 * Comentario de bloco
 */
// Declarando uma variável e visualizando seu conteúdo.
// var nome = "Adriano"
// document.write("O valor da variável.")
// document.write("<br>")
// //Realizando uma concatenação
// document.write(" Nome: " + nome)

// const h1element = document.getElementById('título');

// Atrelar ou adicionar o evento de click do mouse ao elemento
// h1element.addEventListener('click', ()=>{
//     alert('Agora com superpoderes!')
// })

// Altere a cor de fundo do elemento quando ocorrer a passagem de mouse sobre o mesmo
// Coloque a cor do fundo na cor vermelha e a cor do texto na cor branca
// h1element.addEventListener('mouseover', ()=>{
//     h1element.style.backgroundColor = "#ff0000";
//     h1element.style.color = "#fff";
// })
// h1element.addEventListener('mouseout', ()=>{
//     h1element.style.backgroundColor = "#fff";
//     h1element.style.color = "#000000"
// })

let msg = "Bom dia amigos!"
function enviaMsg(msg){

//Parâremtro recebido e sendo verificado 
//SWITCH CASE 

const pElement = document.getElementById("p-msg");

switch (msg) {
    case undefined:
        console.log("Foi enviada uma mensagem vazia!");
        pElement.textContent = "Foi enviada uma mensagem vazia!";

    break;
    case null:
        console.log("Foi enviada uma mensagem nula!");
        pElement.textContent = "Foi enviada uma mensagem nula!";
    
    break;
    case "":
        console.log("Foi enviada uma mensagem em branco!");
        pElement.textContent = "Foi enviada uma mensagem em branco!";
        
    break;
    case "Bom dia amigos!":
        console.log("Bom dia amigos!");
        pElement.textContent = "Bom dia amigos!";

        break;

    default:
        console.error("Ocorreu um erro na transmissão!");
        pElement.textContent = "Ocorreu um erro na transmissão!";
        break;
      }
      return "SUCESSO!";
  }
console.log("esse é o retorno da minha função : " + enviaMsg(null));