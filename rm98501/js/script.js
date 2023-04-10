
// capturar o elemento atravês e visualizando seu conteudo

const h1Element = document.getElementById("meu_titulo")

//Atrelar ou adicionar o evento de click do mouse ao elemento.
h1Element.addEventListener("click",()=>{
    alert("Agora com superpoderes!")
})

//atrelar ou adicionar o evento de clique
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "#ff0000";
    h1Element.style.color = "#fff";
})
// h1Element.addEventListener("mouseout",()=>{
//     h1Element.style.backgroundColor = "#fff";
//     h1Element.style.color = "#000000";
// })

//h1Element.addEventListener("mouseout",alteraCorFundo)

//let msg = "Bom dia amigos!";

function enviaMsg(msg) {

    //Parâmetro recebido e sendo verificado
    //SWITCH CASE

    const pElement = document.getElementById("p-msg");

    switch (msg) {
        case undefined:
            console.log("Foi enviada uma mensagem vazia!");
            pElement.textContent = "Foi enviada uma mensagem vazia!";
            return "Foi enviada uma mensagem vazia!";
        case null:
            console.log("Foi enviada uma mensagem nula!");
            pElement.textContent = "Foi enviada uma mensagem nula!";
            return "Foi enviada uma mensagem nula!";
        case "":
            console.log("Foi enviada uma mensagem em branco!");
            pElement.textContent = "Foi enviada uma mensagem em branco!";
            return "Foi enviada uma mensagem em branco!";;
        case "Bom dia amigos":
            console.log("Bom dia amigos!");
            pElement.textContent = "Bom dia amigos!";
            return  "Bom dia amigos!";
        default:
            console.error("Ocorreu um erro na transmissão!");
            pElement.textContent = "Ocorreu um erro na transmissão!";
            return "Ocorreu um erro na transmissão!"; 
    }
    return "SUCESSO!";
}

console.log("Esse é o retorno: " + enviaMsg(null))

