async function sortear(){
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);

    const menorValor = Number(document.querySelector('#menorValorInput').value);

    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    for(let j = 0; j < 20; j++){

    const elementoHTMLResultsValues = document.querySelector('.results-values');

    elementoHTMLResultsValues.innerHTML = '';

    for(let i = 0; i < totalResultados; i++){

    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor);

    const elementoHTMLDoResultado = document.createElement('div');

    elementoHTMLDoResultado.classList.add('result-value');

    elementoHTMLDoResultado.innerText = resultado;
    
    elementoHTMLResultsValues.append(elementoHTMLDoResultado);
}
 await wait(30)
}
}

function wait(tempo){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    });
}