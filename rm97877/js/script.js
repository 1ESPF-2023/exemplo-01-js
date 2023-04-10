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

// h1element.addEventListener("mouseout", ()=>{
//     h1element.style.backgroundColor = "#fff";
//     h1element.style.color = "#000000";
// })

h1element.addEventListener("mouseout", alteraCorFundo)
function alteraCorFundo(){
    h1element.style.backgroundColor = "#fff";
    h1element.style.color = "#000000";
}

const pelement = document.getElementById("p-msg");
let msg = null
pelement.addEventListener("mouseout", enviaMsg)
function enviaMsg(msg){
//Parametro recebido e sendo verificado
//SWITCH CASE


    switch (msg) {
        case undefined:
            console.log("Foi enviada uma msg vazia!");
            pelement.textContent = "Foi enviada uma msg vazia!";
            return "Foi enviada uma msg vazia!";
        case null:
            console.log("Foi enviada uma msg nula!");
            pelement.textContent = "Foi enviada uma msg nula!";
            return "Foi enviada uma nula!";
        case "":
            console.log("Foi enviada uma msg em branco!");
            pelement.textContent = "Foi enviada uma msg em branco!";
            return "Foi enviada uma msg em branco";             
        case "Bom dia amigos!":
            console.log("Bom dia amigos!");
            pelement.textContent = "Bom dia amigos!";
            return "Bom dia amigos!";  
        default:
            console.error("Ocorreu um erro na transmissao");
            pelement.textContent = "Ocorreu um erro na transmissao";
            return "Ocorreu um erro na transmissao";
            
    }
}
console.log("Esse é o retorno da minha função: " + enviaMsg(undefined));
enviaMsg(msg)


