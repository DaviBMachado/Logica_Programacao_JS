function maior() {
    let valor1 = parseFloat(document.getElementById("valor1").value)
    let valor2 = parseFloat(document.getElementById("valor2").value)
    let valor3 = parseFloat(document.getElementById("valor3").value)

    var maior = valor1
    if (valor2>maior){
        maior = valor2
    }
    if (valor3>maior){
        maior = valor3
    }
    alert("O maior numero é : " + maior)
}

/*rapaziada, tô tentando fazer a leitura de três valores e fazer que ele me mostre o maior entre os três, mas não tá dando certo kkkkkk antes tava aparecendo o valor do 'valor1' só e agr tá aparecendo o do */