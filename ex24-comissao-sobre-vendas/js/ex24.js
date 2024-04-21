let salario = parseFloat(prompt("Informe o seu salario : "))
let totalVendas = parseFloat(prompt("Digite o valor total de vendas : "))

if (totalVendas<1500){
    let salarioTotal = ((totalVendas * 0.3) + salario)
    alert("Seu salario será de : " + salarioTotal)
} else {
    let salarioTotal = ((totalVendas * 0.5) + salario)
    alert("Seu salario será de : " + salarioTotal)
}