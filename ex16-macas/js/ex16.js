let macas = parseInt(prompt("Informe a quantidade de maças compradas : "))
if (macas<12){
    macas = parseFloat(macas * 1.30)
    alert(macas)
} else {
    macas = macas * 1
    alert(macas)
}
//Dentro de um condicional IF não utilizamos daclarações de variavel como: "Var, Let, e const"