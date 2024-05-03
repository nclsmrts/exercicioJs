// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let nascimento =  parseInt(prompt("Digite o ano de seu nascimento"))

if (nascimento <= 2006 ) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}