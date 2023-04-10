//Capturar o elemento através do id utilizando uma função do dom //

const h1Element = document.getElementById("meu-titulo");

// Atrelar ou adicionar o evento de click do mouse ao elemnto.

h1Element.addEventListener("click", ()=>{
    alert("Agora com super poderes!")
})

//Altere a cor de fundo do elemento quando ocorrer a passagem do mouse sobre o elemento!
// Coloque a cor de fundo na cor vermelha e a cor do texto na cor branca.

h1Element.addEventListener("mouseover",() =>{

   h1Element.style.backgroundColor = '#ff0000';
   h1Element.style.color = '#ffff';

})

h1Element.addEventListener("mouseout",() =>{

    h1Element.style.backgroundColor = '#fff';
    h1Element.style.color = '#000';
 
 })
