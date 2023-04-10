//  Executando um teste

//  Declarando uma variável e visualizando seu conteúdo.
// var nome = "Rony"

// document.write("O valor da variável.")
// document.write(nome)
// Realizando uma concatenação
// document.write("NOME : " + nome)

// A variavel "VAR" por ser global, ela sofre de Hoisting, fazendo ela ficar por cima de todas os outras.

// As variaveis "LET" e "CONST" são locais

// Três tipos de dados iniciais do var:

// Undefined
// var tipo1

// Null
// var tipo2 = null

// Empty
// var tipo3 = ""

// var tipo4 = "Declarado."

// Problemas ao declarar tudo com "VAR",é o fato dela sobreescrever as outras variaveis VAR.
// var nome = "Pedro"

// Dentro de escopo, no caso {}, nunca se usa VAR, apenas "LET" ou "CONST" se for objeto.
// if(nome != ""){
//     let nome = "Rony"
// }

// console.log("tipo1 : " + tipo1);
// console.log("tipo2 : " + tipo2);
// console.log("tipo3 : " + tipo3);
// console.log("tipo4 : " + tipo4);

/**
Operadores Relacionais: 

 =  / Operador de igual é de atribuição.
 == / Operador de igual 2x é de igualdade.
 != / Operador exclamação e igual é de diferença ou negaoção, ele inverte o resultado.
 !  / Só a exclamação na frente ele da variavel, ela inverte para false.
 >  / Operador maior, verifica se o valor da esquerda é maior do que o da direita.
 <  / Operador menor, verifica se o valor da esquerda é menor do que o da direita.
 >= / Operador maior ou igual, verifica se o valor da esquerda é maior ou igual do que o da direita.
<=  / Operador menor ou igual, verifica se o valor da esquerda é menor ou igual do que o da direita.

*/

//Estrutura de decisão IF / SE

// if (nome != "") {
//     console.log("IF DE UMA LINHA COM ELSE"); 
// }else{
//     console.log("AQUI É O ELSE!!")
// }

/**
 Utilização de operadores lógicos
 && = e ou AND
 || = ou ou OR
 Para estes opreadores vamos utilizar também as estruturas de descisão incrementadas com else if

 */

// var nome = null
// var sobreNome = null

// if (!nome == "" && !sobreNome == "") {
//     console.log("O nome está preeenchido!");
// } else if ((nome == undefined && nome != null) && (sobreNome == undefined && sobreNome != null)) {
//     console.log("O nome está indefinido!");
// } else if (nome == null && sobreNome == null) {
//     console.log("O nome está nulo!");
// } else if (nome == "" && sobreNome == "") {
//     console.log("O nome não foi preenchido!");
// }else{
//     console.log("Ocorreu um problema desconhecido!");
// }

// Operação TERNÁRIA. A função "?"
// var num1 = 10;
// var num2 = 5;
// var resultado

// Utilizando o operação matemático (% de Módulo), vamos obter o resto da operação da divisão de num1 por num2, podendo descobrir se o número é par ou impar!
// resultado = !(num1%num2) ? "PAR" : "IMPAR";

// console.log("O valor calculado é :" + resultado);

// CAPTURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM
const h1Element = document.getElementById("meu-titulo");

// Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("click",()=>{
    alert("Agora com super!")
})

// Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
// Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca

h1Element.addEventListener("mouseover", ()=>{

    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
})

// h1Element.addEventListener("mouseout", ()=>{

//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000000";
// })

// Altera cor de fundo com função!

h1Element.addEventListener("mouseout", alteraCorFundo)

function alteraCorFundo(){
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000";
}

// let msg = "Bom dia amigos!"

//Função com SWTICH

// function enviaMsg(msg){
// //    h1Element.style.backgroundColor = "#fff";
// //    h1Element.style.color = "#000000";

//     //Parâmetro recebido e sendo verificado
//     //SWITCH CASE - Estrutura de decisão

//     const PElement = document.getElementById("p-msg");
//     switch (msg) {
//         case undefined:
//             console.log("Foi enviada uma mensagem vazia!");
//             PElement.textContent = "Foi enviada uma mensagem vazia!";
//             return "Foi enviada uma mensagem vazia!";
//         case null:
//             console.log("Foi enviada nula!");
//             PElement.textContent = "Foi enviada nula!";
//             return "Foi enviada nula!";
//         case "":
//             console.log("Foi enviada em branco!");
//             PElement.textContent = "Foi enviada em branco!";
//             return "Foi enviada em branco!";
//         case "Bom dia amigos!":
//             console.log("Bom dia amigos!");
//             PElement.textContent = "Bom dia amigos!";
//             return "Bom dia amigos!";
    
//         default:
//             console.error("Ocorreu um erro na transmissão!");
//             PElement.textContent = "Ocorreu um erro transmissâo!";
//             return "Ocorreu um erro na transmissão!";
//     }
// }
// //enviaMsg(msg)

// console.log("Esse é o retorno da minha função : " + enviaMsg(undefined));

