//Comentário de linha
/**
 * Comentário de Bloco.
 */
//Declarando uma variável e visualizando seu conteúdo.
var nome = "Pedro"

document.write("O valor da variável.")
document.write("<br>")
//Realizando concatenação
document.write("NOME : " + nome)

//Três tipos de dados iniciais do var

//undefined
var tipo1
//Nulo
var tipo2 = null
//Vazio
var tipo3 = ""

//Problemas ao declarar tudo com var
var nome = "Pedro"

if(nome !=""){
    let nome = "Rony"
}
console.log("NOME : " + nome)
