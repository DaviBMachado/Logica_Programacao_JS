Algoritmo "Elei��o"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson
// Descri��o   : Programa de calculo de votos, com porcenteagem de votos
// Autor(a)    : Davi Machado
// Data atual  : 19/03/2024
Var
// Se��o de Declara��es das vari�veis 
numero1,numero2,numero3,numero4,numero5:real
porcentagembranco: real
porcentagemnulo: real
porcentagemvalido: real
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
Escreva("Total de votos: ")
leia(numero1)
Escreva("Votos em branco: ")
leia(numero2)
Escreva("Votos nulos:")
leia(numero3)
Escreva("Votos v�lidos: ")
leia(numero4)
porcentagembranco<-numero2*100/numero1
Escreva("Porcentagem de votos em branco", porcentagembranco,"%")
porcentagemnulo<-numero3*100/numero1
Escreval
Escreva("Porcentagem de votos nulos", porcentagemnulo,"%")
porcentagemvalido<-numero4*100/numero1
Escreval
Escreva("Porcentagem de votos v�lidos", porcentagemvalido,"%")
Fimalgoritmo