alert("Insira dois valores para consulta da ordem crescente. NÃO ESCREVA DOIS NÚMEROS IGUAIS")
let numero1 = parseFloat(prompt("Digite um valor : "))
let numero2 = parseFloat(prompt("Digite outro valor : "))
if (numero1>numero2){
    alert(numero2 + " - " + numero1)
} else{
    alert(numero1 + " - " + numero2)
}