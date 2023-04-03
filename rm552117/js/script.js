//Comentário de linha


//Declarando uma variável
var nome="Murilo"

document.write("O valor da variável.")
//Realizando uma concatenação
document.write("NOME: "+nome)
var nome

//Três tipos de dados iniciados do var
//undefined
var tipo1
//Nulo
var tipo2 = null
//Vazio
var tipo3 = ""

//problemas ao declarar tudo com var
var nome = "Murilo"

if(nome!=""){
    let nome="Rony"
}

console.log("Nome: "+nome)


const h1element = document.getElementById("teste")

//adicionar ou atrelar o movimento de click ao elemento

document.addEventListener("click",()=>{
    alert('Agora com alguma coisa ai')
})
//altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento, troque a cor de fundo na cor vermelha e a cor do texto na cor branca

h1element.addEventListener("mouseover",()=>{
    h1element.style.backgroundColor="#ff0000";
    h1element.style.color="#fff";
})

h1element.addEventListener("mouseout",()=>{
    h1element.style.backgroundColor="#fff";
    h1element.style.color="#000000";
})