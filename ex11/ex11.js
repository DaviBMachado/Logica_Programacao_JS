let qtdVendas = parseInt(prompt("Digite a quantidade total de vendas: "))
let valorCarro = 1000
let totalVendas = valorCarro * qtdVendas
let comissaoVendas = totalVendas / 100
let salarioFixo = parseInt(prompt("Digite o valor do seu salario: "))
let comissao = totalVendas * 0.05
let salarioTotal = (comissao + comissaoVendas) + salarioFixo 
alert(salarioTotal)