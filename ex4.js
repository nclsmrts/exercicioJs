// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let notas1 = parseFloat(prompt("Digite a nota do aluno"))
let notas2 = parseFloat(prompt("Digite a nota do aluno"))
let notas3 = parseFloat(prompt("Digite a nota do aluno"))
let notas4 = parseFloat(prompt("Digite a nota do aluno"))

let fim = notas1 + notas2 + notas3 + notas4 / 4

if (fim >= "7") {
    console.log("Aprovado")
} else if (fim < "5") {
    console.log("Reprovado")
} else {
    console.log("Recuperação")
}