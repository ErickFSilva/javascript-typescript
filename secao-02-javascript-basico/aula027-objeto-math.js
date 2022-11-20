
// Objeto MATH

let numMaior = 9.54578;
let numMenor = 9.44578;
// let sequencia = [1,2,3,4,5,-10,-50,1500,9,8,7,6];

let num2 = Math.floor(numMaior); // arredonda para baixo
let num3 = Math.ceil(numMaior); // arredonda para cima
let num4 = Math.round(numMaior); // arredonda para o número mais próximo
let num5 = Math.round(numMenor); // arredonda para o número mais próximo
let num6 = Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6); // retorna o maior número
let num7 = Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6); // retorna o menor número
let num8 = Math.random(); // gera um número aleatório menor que 1
let num9 = Math.round(Math.random() * (10) + 1); // gera um número aleatório entre 1 e 10
const num10 = Math.PI; // gera o valor de PI
let num11 = Math.pow(2, 10); // gera um valor potenciado
let num12 = 100 / 0; // retorna o valor "Infinity"
let num13 = Math.sqrt(9); // retorna a raiz quadrada do parâmetro informado

console.log('Número maior: ' + numMaior);
console.log('Número menor: ' + numMenor);

console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);
console.log(num11);
console.log(num12);
console.log(num13);