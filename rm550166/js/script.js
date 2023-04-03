//Executando um teste

//Declarando uma variável e visualizando seu conteúdo.
// var nome = "Ricardo"

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
// var nome = "pedro"

// if(nome != ""){
//         var nome = "rony"
// }
// console.log("nome:" + nome)

const h1element = document.getElementById("meu-titulo")

//atrelar o evento de click do mouse ao elemento

h1element.addEventListener("click" , ()=>{
        alert("agora com super poderes")

})

//altere a cor de fundo do elemento quando ocorrer a passagem de mouse sobre o elemento
//coloque a cor de fundo na cor vermelha e a cor do texto na cor branca


h1element.addEventListener("mouseover",()=>{
        h1element.style.backgroundColor = "#ff0000" ;
        h1element.style.color = "#fff" ;
})


h1element.addEventListener("mouseout",()=>{
        h1element.style.backgroundColor = "#fff" ;
        h1element.style.color = "#000000" ;
})








