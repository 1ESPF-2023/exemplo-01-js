// Executando um teste
/**
 * Comentário de BLOCO
 * BLOCO
 * COMENTáRIO DE BLOCO
 */
// Declarando uma variável e visualizando seu conteúdo.



// var nome = "Pedro"
// document.write("O valor da variável.")
// document.write(nome)
// document.write("NOME: " + nome)

// tres tipos de dados iniciais do VAR
// undefined
// var tipo1
//Nulo
// var tipo2 = null
//Vazio
// var tipo3 = ""
// problemas ao declarar tudo com VAR
// var nome = "Pedro"

// if(nome != ""){

// var nome = "Rony"

// }
//     console.log("NOME: " + nome)

//capturar o elemento atraves do id utilizando uma funcao do dom
const h1element = document.getElementById("meu-titulo");
//atrelar ou adicionar o evento de click do mouse no elemento:
h1element.addEventListener("click", ()=>{
    alert('Agora com super poderes')

})

//Altere a cor de fundo do elmento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.

h1element.addEventListener("mouseover", ()=>{
    h1element.style.backgroundColor = "#ff0000";
    h1element.style.color = "#fff";
    h1element.style.width = "470px";
    h1element.style.height = "50px";
})

h1element.addEventListener("mouseout", ()=>{
    h1element.style.backgroundColor = "#fff";
    h1element.style.color = "#000000";
})