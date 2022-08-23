/**
 * - Operadores aritméticos, por ordem de precedência: 
 * 
 * (): parênteses
 * **: potenciação
 * *: Multiplicação
 * /: Divisão
 * %: Módulo
 * +: Adção
 * -: Subtração
 * 
 * ++: Incremento
 * --: Decremento
 */


let n1 = 10;
let n2 = 3;

console.log(n1 ** n2); // potenciação
console.log(n1 * n2); // Multiplicação
console.log(n1 / n2); // Divisão
console.log(n1 % n2); // Módulo
console.log(n1 + n2); // Adção
console.log(n1 - n2); // Subtração
console.log();


let contador = 1;

console.log(++contador);
console.log(contador++);
console.log(contador);
console.log();

console.log(--contador);
console.log(contador--);
console.log(contador);
console.log();


const passo = 50;
let cont = 0;
cont += passo;

console.log(cont);