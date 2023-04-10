//Executando um teste //
/**
 * comentário de bloco
 */

//Declarando uma variável e visualizando seu conteúdo.
//var nome = "Pedro"

//document.write("O valor da variável.")
//document.write("<br>")
//Realizando uma concatenação
//document.write("NOME : " + nome)

//Três tipos de dados iniciais do var

//undefined
//var tipo1
//Nulo
//var tipo2 = null
//Vazio
//var tipo3 = ""

// var tipo4 = "DECLAREI"

//Problemas ao declarar tudo com var
//var name = "Pedro"

//if(nome != ""){
//    let nome = "Rony"
//}

// console.log("TIPO 1 : " + tipo1)
// console.log("TIPO 2 : " + tipo2)
// console.log("TIPO 3 : " + tipo3) 
// console.log("TIPO 4 : " + tipo4)

/**

= / Operador de igual é de atribuição.
== / Operador de igual 2x é de igualdade(validação).
!= / Operador de exclamação e igual é de diferença ou negação, ele inverte o resultado.
> / Operador maior, verifica se o valor da esquerda é maior que o da direita.
< / Operador menor, verifica se o valor da esquerda é menor que o da direita.
>= / Operador maior ou igual, verifica se o valor da esquerda é maior ou igual o da direita.
<= / Operador menor ou igual, verifica se o valor da esquerda é menor ou igual o da direita.

 */

// Estrutura de decisão IF / SE
// var nome = "Pedro"
// var sobreNome = "Pereira"

//if(nome != ""){
   //console.log("IF DE UMA COM ELSE!!")
//}else{
   //console.log("AQUI É O ELSE!!")
//}

/**
 Utilização de operadores lógico
 && = e ou AND
 || = ou ou OR
 Para estes operadores vamos utilizar também as estruturas de decisão incrementadas com else if
 
 
 */

 //var nome = null
 //var sobreNome = null 

 //if (!nome == "" && !sobreNome == "" || nome == "") {
    //console.log("O nome está preenchido!")
 //}else if((nome == undefined && nome != null) && (sobreNome == undefined && sobreNome != null)) {
   // console.log("O nome está indefinido!")
//}else if(nome == null && sobreNome == null) {
   // console.log("O nome está nulo!")
//}else if(nome == "" && sobreNome == "") {
    //console.log("O nome não está preenchido!")
 //}else{
   // console.log("Ocorreu um problema desconhecido!")
// }


// Operação ternária. 
//var num1 = 10;
//var num2 = 5;
//var resultado

// Utilizando o operador matemático (% de Módulo), vamos obter o resto da operação da divisão de
// num 1 por num 2, podendo descobrir se o número é par ou impar!
//resultado = !(num1%num2) ? "PAR" : "IMPAR";

//console.log("O valor calculado é : " + resultado)

//CAPITURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM
// const h1Element = document.getElementById("meu-titulo");

//Atrelar ou aidicionar o evento de click do mouse ao elemento.
// h1Element.addEventListener("click",()=>{
//     alert("Agora com superpoderes!")
// })


//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor  do texto na cor branca.

// h1Element.addEventListener("mouseover", ()=>{
//      h1Element.style.backgroundColor = "#ff0000"
//      h1Element.style.color = "#fff";
// })

// h1Element.addEventListener("mouseout", ()=>{
//     h1Element.style.backgroundColor = "#fff"
//     h1Element.style.color = "#000000";
// })


// h1Element.addEventListener("mouseout",alteraCorFundo)

// let msg =  "Bom dia amigos!";


// function enviaMsg(msg){

//    // h1Element.style.backgroundColor = "#fff"
//    // h1Element.style.color = "#000000";

//    // Parâmetro recebido e sendo verificado
//    // SWITCH CASE

//    const pElement = document.getElementById("p-msg")

//    switch (msg) {
//          case undefined:
//             console.log("Foi enviada uma mensagem vazia!")
//             pElement.textContent = "Foi enviada uma mensagem vazia!"      
//             return "Foi enviada uma mensagem vazia!";
//          case null:
//             console.log("Foi enviada uma mensagem nula!")
//             pElement.textContent = "Foi enviada uma mensagem nula!"
//             return "Foi enviada uma mensagem nula!";
//          case "":
//             console.log("Foi enviada uma mensagem em branco!")
//             pElement.textContent = "Foi enviada uma mensagem em branco!"
//             return "Foi enviada uma mensagem em branco!";
//          case "Bom dia amigos!":
//             console.log("Bom dia amigos!")
//             pElement.textContent = "Bom dia amigos!"
//             return "Bom dia amigos!";            
//          default:
//             console.error("Ocorreu um erro na transmissão!")
//             pElement.textContent = "Ocorreu um erro na transmissão!"
//             return "Ocorreu um erro na transmissão!";
//    }

//    return "SUCESSO!";

// }

// console.log("Esse é o retorno da minha função : " + enviaMsg(null));

