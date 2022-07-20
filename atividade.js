// Posições: dentro do array, cada item esta em uma posição: 0,1,2,3...

var listaDePecas = ["amortecedor","Motor","Correia dentada","Filtro de ar","Pneu 14","Farol"]; //Array

// console.log(listaDePecas.length): conta quantos itens tem o array

// atividade 1

if(listaDePecas.length > 10) {
    console.log("Não é possível cadastrar por excesso de peças")
} else {
    console.log("Limite permitido")
}

// atividade 2

let peso = 60;

if(peso >= 100) {
    console.log("Peso permitido")
} else {
    console.log("Peso abaixo do permitido")
}

// atividade 3

let peca = "Farol"

if(peca.length < 3) {
    console.log("O nome da peça é muito pequeno")
} else {
    console.log("O nome da peça é válido")
}