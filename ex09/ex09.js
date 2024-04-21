var salario = parseInt(prompt("Digite o valor do seu salario: R$ "));
var percentual = parseInt(prompt("Digite o valor do percentual de ajuste: "));
var calcPorc = parseFloat(percentual/100);
alert("Seu percentual real será de: " + calcPorc + "%");
var reajuste = (salario * calcPorc) + salario;
alert("Seu salario após reajuste será de: " + reajuste);