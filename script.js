let maiorValor = 0
let adicionar = document.getElementById("adicionar");

//Adiciona Nomes//

function adicionaNomes(){
    let inputAddNomes = document.getElementById("inputAddNomes");

    inputAddNomesValue = inputAddNomes.value 

    let listaDeNomes = document.getElementById("listaDeNomes");

    ++maiorValor
    
    let li = `<li id="${maiorValor}" class="lista"><div id="nome">${inputAddNomesValue}</div><button onclick="deletar(${maiorValor})" id="delete">X</button></li>`;

    if((inputAddNomesValue !== "") && (inputAddNomesValue !== null) && (inputAddNomesValue !== undefined)){

    listaDeNomes.innerHTML += li

    inputAddNomes.value = "";
    inputAddNomes.focus();
    document.getElementById("limpaLista").style.display = "block"

}

}

//função deleta nome//

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    --maiorValor
}

function deletarTudo(){
    for(let T = 0; T < maiorValor; T++){
    var TUDO = document.querySelector(".lista");
    TUDO.remove();
}
    maiorValor = 0
    document.getElementById("limpaLista").style.display = "none"
}

//sorteio//

async function sortear(){
    if((inputAddNomesValue !== "") && (inputAddNomesValue !== null) && (inputAddNomesValue !== undefined)){
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);

    for(let j = 0; j < 20; j++){

    const elementoHTMLResultsValues = document.querySelector('.results-values');

    elementoHTMLResultsValues.innerHTML = '';

    for(let i = 0; i < totalResultados; i++){

    const resultado = Math.floor(Math.random() * (maiorValor - 1 + 1) + 1);

    const elementoHTMLDoResultado = document.createElement('div');

    elementoHTMLDoResultado.classList.add('result-value');

    elementoHTMLDoResultado.innerText = resultado

    elementoHTMLResultsValues.append(elementoHTMLDoResultado);
}
 await wait(30)
}
}
}

function wait(tempo){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    });
}


//enter click//
inputAddNomes.addEventListener("keyup" , function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        adicionar.click();
    }
});