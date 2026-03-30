// Operações aritméticas

// Soma

let num1 = 2;
let num2 = 4;

let soma = num1 + num2;

console.log("O resultado da soma é:",soma);

// Subtração

let subtracao = 50 - 25;

console.log("O resultado da subtração é:",subtracao);

// Mutiplicação

let multiplicacao = 10 * 2;

console.log("O resultado da multiplicação é:",multiplicacao);

// Divisão

let divisao = 100 / 4;

console.log("O quociente da divisão é:",divisao)

// Operações de comparação

// Igualdade

console.log("10 é igual a 10?",10==10);

// Diferença

console.log("O nome Ana é diferente do nome Luiz?","Ana"!="Luiz");

// Menor

console.log("5 é menor que 10?",5<10);

// Maior

let valor = 10;

console.log("O preço",valor,"é maior que 50?",valor>50);

// Menor ou Igual

valor = 20;

console.log("O valor",valor,"é menor ou igual a 20?",valor<=20);

// Maior ou Igual

let idade = 17;

console.log("Você é maior de idade?",idade>=18);

// Operadores Ternários

let nota = 7;

let resultado = (nota >= 7) ? "Aprovado" : "Reprovado";

idade = 18;

let status = (idade >= 18) ? "Adulto" : "Menor";

// Template Literals

let nome = "Gabriel"

console.log(`Olá, ${nome}`);

let produto = "Amaciante";
let preco = 19.99;
let quantidade = 2;

console.log(`Compra aprovada de ${quantidade} ${produto} com o preço unitário de ${preco}, valor total ${preco*quantidade}`);


// Atividade de união

nome = "Mateus"; 
idade = 18;
let mensagem = (idade >=18) ? `A pessoa ${nome} é maior de idade` : `A pessoa ${nome} é menor de idade`;

console.log(mensagem);