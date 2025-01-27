let sorteioP = document.querySelector("#sorteioP");
let sorteioS = document.querySelector("#sorteioS");
let titulo1 = document.querySelector("h1");
let paragrafo = document.querySelector("p");
let input = document.querySelector("input");
let lista = document.querySelector(".lista");
let nome = document.querySelector(".nome");
let excluir = document.querySelector(".excluir");
let botãoadd = document.querySelector("#botãoadd");
let botãosortea = document.querySelector("#botãosortea");
let arealista = document.querySelector("#arealista");
let contador = 0;

function addlista(){
    if((input.value !== "") && (input.value !== null) && (input.value !== undefined)) {
        
        ++contador;

        let novoItem = `<div class="lista" id="${contador}">
                <div class="nome" id="${contador}">${input.value}</div>
                <div onclick="deletar(id)" class="excluir" id="${contador}">X</div>
            </div>`;

        arealista.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

function deletar(id){
    --contador
    var tarefa = document.getElementById(id);
    tarefa.remove();
    
};

function sortear(id){
    var tarefa = document.getElementById(id = Math.floor(Math.random() * (contador - 0 + 1)) + 0);
    tarefa.remove();
}   

