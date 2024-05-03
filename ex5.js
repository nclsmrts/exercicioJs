// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let n1 = parseInt(prompt("Digite um numero"))
let n2 = parseInt(prompt("Digite um numero"))
let n3 = parseInt(prompt("Digite um numero"))

if ( n3 > n2 & n2> n1) {
    console.log("Estão em ordem crescente")
} else {
    console.log("Não estão em ordem crescente")
}
