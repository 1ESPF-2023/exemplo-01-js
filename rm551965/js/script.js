
// capturar o elemento atravês e visualizando seu conteudo

const h1Element = document.getElementById("meu_titulo")

h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")
})
//atrelar ou adicionar o evento de clique
h1Element.addEventListener("mouseover",()=>{
    lh1Eement.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
})
//h1Element.addEventListener("mouseout",()=>{
// h1Element.style.backgroundColor = "#fff";
//  h1Element.style.color = "#000000";
//})

//h1Element.addEventListener("mouseout", alteracorFundo)
 
//function alteracorFundo() {
//  h1Element.style.backgroundColor = "#fff";
 //   h1Element.style.color = "#000000";

//let Msg ="mensagem enviada de longe!"

function enviaMsg(msg){


    const pElement = document.getElementById("p-msg")

switch(msg) {
    case undefined:
        console.log("Foi enviado uma mensagem vazia!");
        pElement.textcontent = "Foi enviado uma mensagem vazia!"
        break;
    case null:
        console.log("Foi enviado uma mensagem nula!");
        pElement.textcontent = "Foi enviado uma mensagem nula!"
        break;
    case "":
        console.log ("Foi enviado uma mensagem em branco!");
        pElement.textcontent = "Foi enviado uma mensagem em branco!"
        break;

    case "Bom dia galera":
        console.log("Bom dia galera");
        pElement.textcontent = "Bom dia galera"
        break;
        
        default:
            console.error("Ocorreu um erro na tranmissão");
            pElement.textcontent = "ocorreu um erro na transmissão"
        break;
             

}

return "Sucesso" ; 

}

enviaMsg(msg)

console.log ("Esse é o retorno da minha função : " + enviaMsg(null));







