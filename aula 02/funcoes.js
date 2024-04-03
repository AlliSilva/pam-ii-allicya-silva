
//Introdução
let num1 = 2
const num2 = 3
var msg = "Olá amigos, como vão ? Esse é o número: " 

console.log(msg, num1)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)



//Exemplo 01
function Somar () {
    n1 = 2
    n2 = 5
    console.log("O resultado é:", n1 + n2)
}
// Obs: Função é algo que eu crio! mas... tudo no js
// é função

Somar() // aqui ela é executada
Somar()



//Exemplo 02
function SomarComParametros (n1 , n2) {
    let resultado = "O resultado é: " + (n1 + n2)
    console.log(resultado)
}

SomarComParametros(16 , 30)
SomarComParametros(70 , 54)



//Exemplo 03
const Teste = (n) => {
    let result = n % 2

    if (result == 1) {
        return "Número Ímpar"
    }

    return "Número Par"
}

console.log (Teste(2))
console.log (Teste(7))
Teste(5) // essa linha não vai executar pq não tem console