Algoritmo "Salario"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson
// Descri��o   : Leitor de calculo de sal�rio mensal, convertendo de acordo com o reajuste
// Autor(a)    : Davi Machado
// Data atual  : 19/03/2024
Var
// Se��o de Declara��es das vari�veis 
numero1: inteiro
numero2: real
numero3: real
calcpor: real
reajuste: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
Escreva("Digite o seu sal�rio mensal: ")
leia(numero1)
Escreva("Digite o valor do seu percentual de reajuste: ")
leia(numero2)
calcpor<-numero2/100
numero3<-calcpor
Escreval
Escreva("Seu percentual real ser� de:",calcpor)
reajuste<-numero1*numero3+numero1
Escreva("Com o reajuste, seu sal�rio ser�: R$",reajuste)
Fimalgoritmo