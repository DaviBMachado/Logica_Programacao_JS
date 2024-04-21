let inicioJ = parseInt(prompt("Qual o horário de inicio do jogo em números inteiros ? "))
let finalJ = parseInt(prompt("Qual o horário do termino do jogo ? "))
let total = finalJ - inicioJ
if (finalJ < inicioJ){
    alert(total + 24)
} else{
    alert(total)
}