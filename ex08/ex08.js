alert("Digite a quantidade de total de votos, e de votos brancos, nulos e válidos a seguir");
var totalVotos = parseInt(prompt("Total de votos: "));
var branco = parseInt(prompt("Votos em branco: "));
var nulo = parseInt(prompt("Votos nulos: "));
var validos = parseInt(prompt("Votos válidos: "));
alert("Total de votos" + totalVotos);
alert("Total de votos 'Brancos': " + (branco *100 / totalVotos + "%"));
alert("Total de votos 'Nulos': " + (nulo *100 / totalVotos + "%"));
alert("Total de votos 'Válidos': " + (validos *100 / totalVotos + "%"));