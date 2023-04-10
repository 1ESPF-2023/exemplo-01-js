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


// h1element.addEventListener("mouseout",()=>{
//         h1element.style.backgroundColor = "#fff" ;
//         h1element.style.color = "#000000" ;
// })

// h1element.addEventListener("mouseout",alteraCorFundo)

// let msg = "bom dia amigos"

function enviaMsg(msg){
        
        //parametro recebido e sendo verificado
        //switch case
        
        const pElement = document.getElementById("p-msg");
        
//         switch (msg) {
//                 case undefined:
//                         console.log("foi enviada uma mensagem indefinida");
//                         pElement.textContent = "foi enviada uma mensagem indefinida";
                        
//                         return "foi enviada uma mensagem indefinida";
//                  case null:
//                                 console.log("foi enviada uma mensagem em branco");
//                                 pElement.textContent= "foi enviada uma mensagem em branco";
//                         return "foi enviada uma mensagem em branco";
//                  case "":
//                         console.log("foi enviada uma mensagem vazia");
//                         pElement.textContent = "foi enviada uma mensagem vazia";
//                         return "foi enviada uma mensagem vazia";
//                  case "bom dia amigos":
//                         console.log("bom dia amigos");
//                         pElement.textContent = "bom dia amigos";
//                         return "bom dia amigos";
//                 default:
//                         console.error("ocorreu um erro na transmissao");
//                         pElement.textContent = "ocorreu um erro na transmissao";
//                         return "ocorreu um erro na transmissao";
//         }
//         return "SUCESSO!"
// }
// console.log("esse e o retorno da minha funcao:" + enviaMsg(""));

// enviaMsg(msg)








