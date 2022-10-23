// índices:    0123456789...
let string1 = "o rato roeu a roupa do rei de roma!";
let string2 = 'Outro Texto';

console.log(string1); // imprime o string
console.log(string2); // imprime o string
console.log(string1[2]); // imprime o caractere na posição informada
console.log(string1.charAt(4)); // imprime o caractere na posição informada
console.log(string1.concat(string2)); // concatena strings
console.log(`${string1} ${string2}`); // concatena strings
console.log(string1.indexOf('texto', 3)); // encontra a posição do texto em pesquisa, apartir da posição informada
console.log(string1.indexOf('texto')); // encontra a posição, inicial, do texto em pesquisa
console.log(string2.lastIndexOf('e')); // encontra a posição, final, do texto em pesquisa
console.log(string1.match(/[a-z]/g)); // ?
console.log(string1.search(/texto/)); // encontra o texto em pesquisa
console.log(string1.replace('o', 'O')); // substitui palavras
console.log(string1.replace(/r/g, 'R')); // substitui palavras
console.log(string1.length); // conta a quantidade de caracteres da string
console.log(string1.slice(2, 11)); // extrai parte da string na posição informada
console.log(string1.slice(-5, -1)); // extrai parte da string na posição informada
console.log(string1.split(' ')); // divide o string pelo caractere informado, criando um array com as posições totais
console.log(string1.split(' ', 3)); // divide o string pelo caractere informado, criando um array com as posições informadas
console.log(string2.toUpperCase()); // converte os caracteres para maiúculos
console.log(string2.toLowerCase()); // converte os caracteres para minúsculos