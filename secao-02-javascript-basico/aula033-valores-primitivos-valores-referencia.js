// - Valores primitivos (imutáveis): String, number, boolean, undefined, null (bigint, symbol);

let nome = 'Erick';
nome[0] = 'A';
console.log(nome);

let a = 'A';
let b = a; // Com valores primitivos, é feito uma cópia da variável 'a' para a variável 'b'
console.log(a, b);

a = 'Outro valor';
console.log(a, b);
console.log();


// - Valores por referência (mutáveis): Array, object, function

let a2 = [1, 2, 3];
let b2 = a2;
console.log(a2, b2);

a2.push(4);
console.log(a2, b2);

b2.pop();
console.log(a2, b2);

let a3 = [10, 20, 30];
let b3 = [...a3]; // (spread em javascript) Puxa o valor de 'a3' para 'b3'
let c3 = b3;
console.log(c3);

const a4 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b4 = a4;
console.log(b4);

a4.nome = 'Bruno';
console.log(b4);