Algoritmo "Salario"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Jailson
// Descrição   : Leitor de calculo de salário mensal, convertendo de acordo com o reajuste
// Autor(a)    : Davi Machado
// Data atual  : 19/03/2024
Var
// Seção de Declarações das variáveis 
numero1: inteiro
numero2: real
numero3: real
calcpor: real
reajuste: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreva("Digite o seu salário mensal: ")
leia(numero1)
Escreva("Digite o valor do seu percentual de reajuste: ")
leia(numero2)
calcpor<-numero2/100
numero3<-calcpor
Escreval
Escreva("Seu percentual real será de:",calcpor)
reajuste<-numero1*numero3+numero1
Escreva("Com o reajuste, seu salário será: R$",reajuste)
Fimalgoritmo