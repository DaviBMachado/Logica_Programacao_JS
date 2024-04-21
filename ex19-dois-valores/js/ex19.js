alert("Insira dois valores para consulta do maior para o menor. NÃO ESCREVA DOIS NÚMEROS IGUAIS")
let numero1 = parseFloat(prompt("Digite um valor : "))
let numero2 = parseFloat(prompt("Digite outro valor : "))
if (numero1>numero2){
    alert(numero1 + " é maior que " + numero2)
} else{
    alert(numero2 + " é maior que " + numero1)
}