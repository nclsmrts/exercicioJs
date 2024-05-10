// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.



function tabuada() {

    let num = parseInt(prompt("Digite um número:"))

    console.log("Tabuada do número: " + num);
    for (mult = 1; mult <= 10; mult++) {
        console.log(mult * num);
    }
}

function Idade() {

    let id = parseInt(prompt("Digite sua idade: "))

    while (id < 18) {

        id = parseInt(prompt("Digite sua idade: "))
    }

    console.log("Sua idade é: " + id);

}


function Contagemregressiva() {

    let num = parseInt(prompt("Digite um número: "))
    console.log("Contagem regressiva do número: " + num);

    while (num > 0) {
        num--
        console.log(num);
    }

}


function numimpares() {

    console.log("Números ímpares de 0 a 50:");

    for (let num = 0; num <= 50; num++) {
        if (num % 2 != 0) {
            console.log(num);
        }
    }
}

function numpares() {

    console.log("Números pares de 0 a 10:");

    for (let num = 1; num <= 10; num++) {
        if (num % 2 == 0) {
            console.log(num);
        }
    }
}

function somadosnum() {

    let a = 1
    let b = 0

    console.log("Soma dos números 1 ao 100");

    while (a <= 100) {
        a++
        b += a
        console.log(b);
    }
}



let opcao;

while (opcao != 0) {

    
    opcao = prompt("Escolha uma opção\n1 - Tabuada \n2 - Idade \n3 - Contagem Regressiva \n4 - Números Ímpares de 0 a 50\n5 - Números Pares 0 a 10\n6 - Soma dos números de 1 a 100 \n Digite 0 para sair ")
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

        case "5":
            numpares()
            break;
        case "6":
            somadosnum()
            break;

        default:
            break;
    }
}

if (opcao == 0) {
    console.log("Saiu!");
}
