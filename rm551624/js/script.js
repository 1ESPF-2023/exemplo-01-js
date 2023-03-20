//Comentário de linha

/**
 * comentário de bloco
 */

//Declarando uma variaável e visualizando seu conteúdo.
var nome = "Thiago"
document.write("O valor da variável.")
document.write("<br>")
//Realizando uma concatenação
document.write("NOME : " + nome)
document.write("<br>")

// alert("Olá Mundo!")

//3 tipos de dados iniciais do var

//undefined
var tipo1
//nulo
var tipo2 = null
//vazio
var tipo3 = ""

//problemas ao declarar tudo com var
var nome = "Thiago"

if(nome != ""){
    var nome = "Rony"
}

console.log("NOME : " + nome)