//executando um teste 

//declarando uma variavel e visualizando seu conteudo.

h1element.addEventListener("mouseout", alteraCorFundo )

let msg = "bom dia amios!"

function alteraCorFundo(msg){
    //parametro recebido e sendo verificado 
    //switch case
    
    const pElement = document.getElementById("p-msg");

    switch (msg) {
        case undefined:
            console.log("foi enviada uma mensagem vazia");
            pElement.textContent="foi enviada uma mensagem vazia"

            break;
         case null:
                console.log("foi enviada uma mensagem nula");
                pElement.textContent="foi enviada uma mensagem nula"
                break;
            case "":
                    console.log("foi enviada uma mensagem em branco");
                    pElement.textContent ="foi enviada uma mensagem branco"
                break;
              case "bom dia amigos !":
                        console.log("bom dia amigos !");
                        pElement.textContent="bom dia amigos !"
        default:
            console.error("ocorreu um erro na transmissão")
            pElement.textContent="ocorreu um erro na transmissão"
            break;
    }

    return "sucesso!";
}
console.log("esse é o retorno da minha função")
enviaMsg(null)