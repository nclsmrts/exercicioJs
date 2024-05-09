// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.



function tabuada() {

    let num = parseInt(prompt("Digite um número:"))

    for (mult = 1; mult <= 10; mult++) {
        console.log(mult * num);
    }
}

function Idade() {

    let id = parseInt(prompt("Digite sua idade: "))

    while (id < 18) {

        id = parseInt(prompt("Digite sua idade: "))
    }

    console.log("Maior de idade");

}


function Contagemregressiva() {

    let num = parseInt(prompt("Digite um número: "))

    while (num > 0) {
        num--
        console.log(num);
    }

}


function numimpares() {

    for (let num = 0; num <= 50; num++) {
        if (num % 2 != 0) {
            console.log(num);
        }
    }
}


let opcao = (prompt("Escolha uma opção\n1 - Tabuada \n2 - Idade \n3 - Contagem Regressiva \n4 - Números Ímpares "))

switch (opcao) {
    case "1":
        tabuada()
        break;

    case "2":
        Idade()
        break;

    case "3":
        Contagemregressiva()
        break;

    case "4":
        numimpares()
        break;

    default:
        break;
}
