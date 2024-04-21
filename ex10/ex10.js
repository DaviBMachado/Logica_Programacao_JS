var custoFabrica = parseFloat(prompt("Digite o valor de fabrica do carro: "));
var distribuidor = custoFabrica * (28/100)
alert("O custo do distribuidor é de: R$"+distribuidor)
var imposto = custoFabrica * (45/100)
alert("O custo de impostos é de: R$"+imposto)
var custoConsumidor = custoFabrica + imposto + distribuidor
alert("O valor final do carro será de: R$" + custoConsumidor)