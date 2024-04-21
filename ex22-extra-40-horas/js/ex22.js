let thmes = parseFloat(prompt("Informe o total de horas trabalhadas no mês"))
let vhora = parseFloat(prompt("Qual o valor da hora trabalhada ? "))
let extra = (vhora * 0.50) + vhora

if (thmes<=160){
    alert("Seu salário será de : " + thmes * vhora)
} else{
    alert("Seu salário será de : " + ((thmes * vhora) + ((thmes - 160) * (vhora/2))))
}