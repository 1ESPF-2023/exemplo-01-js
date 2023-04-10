//Executando um teste //

//Declarando uma variável e visualizando seu conteúdo.

//Comentário de linha

/**
 * Comentário de bloco
 */

//3 tipos de dados inciais no var
//undefined
var tipo1;   
//null
var tipo2 = null; 
//Vazio 
var tipo3 = "";
var tipo4 = "Declarei";

//Problemas ao declarar tudo com var:
// var nome = "Lilith"
// if(nome != ""){
//     let nome = "Luna"
// };

// console.log("NOME :" + nome);

console.log(`Tipo 1: ${tipo1}, Tipo 2: ${tipo2}, Tipo 3: ${tipo3}, Tipo 4: ${tipo4}.`);

/**
 * Operadores relacionais:

 *  = atribuição
 *  == igualdade
 *  != diferente ou negação
 *  < menor
 *  > maior
 *  <= menor ou igual
 *  >= menor ou igual
 */

// Estrutura de decisão
var nome = "Luna";
var sobrenome =  "Gouvea";
var error = "Nome não definido";

if (nome != "") {
    console.log("Oi "+ nome +"!");
} else {
    console.log(error);
};

/**
 * Operadores Lógicos:
 * 
 * && E
 * || ou
 * 
 * Para estes operadores, vamos utilizar tbm as estruturas de decisão incrementadas com else if
 */

if (nome != false && sobrenome != false) {
    console.log("o nome está preenchido");
} else if (nome.length <= 2 && sobrenome.length <= 2 ){
    console.log("Necessários mais caracteres");
} else {
    console.log("Ocorreu um problema desconhecido!");
};

//  Operação ternária:

var num1 = 10;
var num2 = 5;
var resultado;

// % operador martemático de porcentagem, entrega o resto da operação
resultado = !(num1 % num2) ? "par" : "ímpar";

console.log(`O valor calculado é ${resultado}.`)

// teste
