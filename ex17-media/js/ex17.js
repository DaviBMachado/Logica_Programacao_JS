let prova1 = parseFloat(prompt("Digite a nota da primeira prova : "))
let prova2 = parseFloat(prompt("Digite a nota da segunda prova : "))
let media = (prova1 + prova2)/2
if (media>6){
    alert(media + " : Aluno aprovado")
} else{
    alert(media + " : Aluno reprovado")
}