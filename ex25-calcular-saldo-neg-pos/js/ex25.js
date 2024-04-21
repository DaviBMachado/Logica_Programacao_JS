let conta = prompt("DIgite o numero da sua conta")
let saldo   =   parseFloat(prompt("Digite o valor do seu saldo : "))
let debito = parseFloat(prompt("Digite o valor a ser debitado : "))
let credito = parseFloat(prompt("Digite o valor do credito : "))
let saldoAtual = saldo - debito + credito

if (saldoAtual>0){
    alert("O valor da conta" + conta + "é de : " + saldoAtual + " " +"Saldo Positivo")
} else{
    alert("O valor da conta" + conta + "é de : " + saldoAtual + " " +"Saldo Negativo")
}