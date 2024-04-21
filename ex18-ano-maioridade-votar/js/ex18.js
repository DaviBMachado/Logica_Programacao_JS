let anoAtual = parseInt(prompt("Digite o ano atual : "))
let nascimento = parseInt(prompt("Digite o seu ano de nascimento : "))
let idade = anoAtual - nascimento
if (idade<16){
    alert("Sua idade é : " + idade + " anos e você Não poderá votar")
} else if (idade<18){
    alert("Sua idade é : " + idade + " anos e Votar é opcional")
} else{
   alert("Sua idade é : " + idade + " anos e você é Obrigatório votar") 
}