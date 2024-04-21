let qtdAtual = parseInt(prompt("Informe em números inteiros a quantidade disponivel em estoque : "))
let qtdMax = parseInt(prompt("Digite a quantidade máxima em estoque : "))
let qtdMin = parseInt(prompt("Digite a quantidade mínima em estoque : "))

let media = (qtdMax + qtdMin)/2

if (qtdAtual>media){
    alert("A media desse produto é de : " + media)
    alert("Estoque disponível" + " " + qtdAtual + " " + "Não efetuar a compra")
} else{
    alert("A media desse produto é de : " + media)
    alert("Estoque disponível" + " " + qtdAtual + " " + "Efetuar a comprar")
}