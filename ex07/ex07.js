alert("Informe sua idade sepando por dias, meses e anos a seguir")
var dias = parseInt(prompt("Digite a quantidade atual de dias: "))
var meses = parseInt(prompt("Digite a quantidade de meses atual: "))
var anos = parseInt(prompt("Digite o valor de anos atual: "))
anos = anos * 365
dias = dias
meses = meses * 30
alert(anos + dias + meses)