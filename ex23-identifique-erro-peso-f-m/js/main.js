let nome = prompt("Digite o seu nome : ")
let sexo = prompt("Digite o seu sexo com a sigla M ou F")
let altura = parseFloat(prompt("Informe a sua altura em Metros e centimetros"))

if (sexo = "M")  {
    let peso_ideal = ((72.7 * altura) -58)
    alert("Seu peso ideal é de : " + peso_ideal)
}else if (sexo = "F"){
    let peso_ideal = ((62.1 * altura) - 44.7)
    alert("Seu peso ideal é de : " + peso_ideal)
}