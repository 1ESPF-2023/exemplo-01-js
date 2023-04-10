// //Executando um teste

// //Declarando uma variável e visualizando seu conteúdo

// var nome = "Nikolas"

// //  document.write("O valor da variável.")
// //  document.write(nome)
// //  document.write("<br>")
// // realizando uma concatenação
// // document.write("NOME: " + nome)


// //Três tipos  de dados iniciais do var

// //undefined
// var tipo1
// // nulo
// var tipo2 = null
// //vazio
// var tipo3 = ""

// //problemas ao declarar tudo com var
// var nome = "Nikolas"

// if(nome != ""){
//     nome = "Rony"
// }

// console.log("NOME: " + nome)

//CAPTURAR O ELEMENTO ATRAVÉS DO ID UTILIZANDO UMA FUNÇÃO DO DOM
const h1Element = document.getElementById("meu-titulo")

//Atrelar ou adicionar o evento de click do mouse ao elemnto
h1Element.addEventListener("click", ()=>{
    alert("Agora com superpoderes!")
})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
//Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.
h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
    h1Element.style.width = "470px"
    h1Element.style.height = "50px"
})

h1Element.addEventListener("mouseout", ()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000000"
})