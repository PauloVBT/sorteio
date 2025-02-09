function sortear(){
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);

    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    const menorValor = Number(document.querySelector('#menorValorInput').value);

    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor);

    const elementoHTMLDoResultado = document.createElement('div');

    elementoHTMLDoResultado.classList.add('result-value');

    elementoHTMLDoResultado.innerText = resultado;

    const elementoHTMLResultsValues = document.querySelector('.results-values');
    
    elementoHTMLResultsValues.append(elementoHTMLDoResultado);
}