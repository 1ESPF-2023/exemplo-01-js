//Executando um teste //

//Declarando uma variável e visualizando seu conteúdo.
//var nome = "Ricardo"

// document .write("o valor da variável")
// document.write("<br>")
// //realizando uma concatenação
// document.write("Nome:" + nome)

//tres tipos de dados iniciais dp var



// undefined
// var tipo1
// nulo
// var tipo2 = null
// vazio
// var tipo3 = ""

//problemas ao declarar tudo com var
//var nome = "pedro"

//if(nome != ""){
        // let nome = "rony"
//}
// console.log("TIPO 1:" + tipo1)
// console.log("TIPO 2:" + tipo2)
// console.log("TIPO 3:" + tipo3)




/**
 
= / operador de igual é de atribuição 
== / o operador e igual 2x é de igualdade(validação)
!= / operador exclamação e iguall é de diferença ou negação, inverte o resultado
> / operador maior, verifica se o valor da esquerda é maior do que o da direita
< / operador menor, verifica se o valor da esquerda é menor do que o da direita
>= / operador maior ou igual , verifica se o valor da esquerda é maior ou  igual  do que o da direita
<= / operador menor ou igual , verifica se o valor da esquerda é menor ou igual do que o da direita


 */

//estrutura de decisão IF / SE


// if(nome != ""){
// console.log("IF DE UMA LINHA COM ELSE")
// }else{
//         console.log("AQUI É O ELSE")

// }

/** 
 * utilização de operadores lógicos 
 && = e ou AND
 || = ou ou OR
 para estes operadores vamos utilizar tambem as estrutras de decisão incrementadas com else if
 


*/

// var nome = null
// var sobreNome = null

// if (!nome == "" && !sobreNome == "") {
// console.log("o nome esta preenchido!")
// }else if ((nome == undefined && nome != null) && (sobreNome == undefined && sobreNome != null)){
//         console.log("o nomes esta indefinido")
// }else if (nome == null && sobreNome != null) {
//         console.log("o nome esta nulo!")
// }else if (nome == "" && sobreNome == "") {
//         console.log("o nome nao esta preenchido!")
// }else{
//         console.log("ocorreu um problema desconhecido!")
// }




//operação ternária
// var num1 = 10;
// var num2 = 5;
// var resultado


// // utilizando o operador matematico (% de modulo), vamos obter o resto da operacao de divisao de 
// resultado = num1%num2 ? "PAR" : "IMPAR";

// console.log("o valor calculado é: " + resultado)

//CAPTCURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM

const h1Element = document.getElementById("meu-titulo");

//Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")
})

 // Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
 // coloque a cor de fundo na cor rosa e a cor do texto na cor branca.

 h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff8090";
    h1Element.style.color = "#fff";
 })

 h1Element.addEventListener("mouseout",function(){
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000";
 })

//  h1Element.addEventListener("mouseout",alteraCorFundo)

//let msg = null;

//    function enviaMsg(msg){     //nomear funções dessa forma

//       //Parâmetro recebido e sendo verificado
//       //SWITCH CASE

//       const pElement = document.getElementById("p-msg");

//       switch (msg) {
//          case undefined:
//             console.log("Foi enviada uma mensagem vazia!");
//             pElement.textContent = "Foi enviada uma mensagem vazia!";
//             break;
//          case null:
//             console.log("Foi enviada uma mensagem nula!");
//             pElement.textContent = "Foi enviada uma mensagem nula!";
//             return "Foi enviada uma mensagem nula"; //exemplo de return
//          case "":
//             console.log("Foi enviada uma mensagem em branco!");
//             pElement.textContent = "Foi enviada uma mensagem em branco!";
//             break;
//          case "Bom dia":
//             console.log("Bom dia");
//             pElement.textContent = "Bom dia";
//             break;
//          default:
//             console.error("Ocorreu um erro na transmissão!");
//             pElement.textContent = "Ocorreu um erro na transmissão!";
//             break;
//       }

//       return "SUCESSO!";
//   }

//    console.log("Esse é o retorno da minha função: " + enviaMsg(null));

   //Diferença entre break e return:
   //break = sai de dentro de um escopo menor
   //return = sai do escopo total