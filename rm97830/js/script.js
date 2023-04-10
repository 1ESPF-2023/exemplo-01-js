// Executando um teste
/**
 * Comentário de Bloco
 */

// Declarando uma variável e visualizando seu conteúdo
//var nome = "Filipe"

// Realizando uma concatenação
//document.write("Nome: " + nome)

// Capturar o elemento através do id utilizando uma função do DOM
//const h1element = document.getElementById('título');

// Atrelar ou adicionar o evento de click do mouse ao elemento
//h1element.addEventListener('click', ()=>{
//    alert('Agora com superpoderes!')
//})

// Altere a cor de fundo do elemento quando ocorrer a passagem de mouse sobre o mesmo
// Coloque a cor do fundo na cor vermelha e a cor do texto na cor branca
//h1element.addEventListener('mouseover', ()=>{
//    h1element.style.backgroundColor = "#ff0000";
//    h1element.style.color = "#fff";
//})
//h1element.addEventListener('mouseout',alteraCorFundo)

//function alteraCorFundo(){
//    h1element.style.backgroundColor = "#fff";
//    h1element.style.color = "#000000"
//}
// Pode usar "()=>" ou  "function()" para executar funções. Antes do "()" vem o nome da função
// Usar "()=>" é uma prática melhor do que "function()"

//let msg = "Bom dia amigos!"

//function enviaMsg(msg){
    // Switch Case
//   const pElement = document.getElementById('pmsg')

//    switch (msg) {
//        case undefined:
//            console.log('Foi enviada uma mensagem indefinida!')
//            pElement.textContent = 'Foi enviada uma mensagem indefinida!'
//            return 'Mensagem indefinida!';

//        case null:
//            console.log('Foi enviada uma mensagem nula!')
//            pElement.textContent = 'Foi enviada uma mensagem nula!'
//            return 'Mensagem nula!';

//        case "":
//            console.log('Foi enviada uma mensagem em branco!')
//            pElement.textContent = 'Foi enviada uma mensagem em branco!'
//            return 'Mensagem em branco!';

//       case "Bom dia amigos!":
//            console.log('Bom dia amigos!')
//            pElement.textContent = 'Bom dia amigos!'
//            return 'Bom dia amigos!';
    
//        default:
//            console.error('Ocorreu um erro na transmissão!')
//            pElement.textContent = 'Ocorreu um erro na transmissão!'
//            return 'Ocorreu um erro na transmissão!';
    // Usar o "return" ao invés de "break"
//   }
//}

//console.log('Esse é o retorno da minha função: ' + enviaMsg(msg))