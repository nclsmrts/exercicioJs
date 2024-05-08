// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let a = 0
let b = 1 
let c = 0
let manola = " "

manola += a + " " + b

for(let contador = 1; contador <=8; contador++){
    c = a + b
    a = b
    b = c

    manola += " " + c
}

console.log(manola);