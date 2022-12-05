// Função
function saudacao(nome) {
    return `Bom dia, ${nome}`;
}

const pessoa = saudacao('Erick');
console.log(pessoa);
console.log();


// 
function soma(x = 1, y = 1) {
    // Variáveis e constantes são proteginas dentro do escopo de bloco
    const resultado = x + y;

    // Nada abaixo do 'return', e dentro do bloco, será lido pelo interpretador
    return resultado;

    console.log('Não será lido!!!');
}

console.log(soma(2, 2));
const outroResultado = soma();
console.log(outroResultado);
console.log();

// 
const resultado = 2 + 2;
console.log(resultado);
console.log();


// Função normal
function raiz(n) {
    return Math.sqrt(n);
}
console.log(raiz(4));


// Função anônima
// - Neste caso como estamos atribuindo uma função a uma variável (constante), precisamos finalizar com ';
const raiz2 = function (n) {
    return n ** 0.5;
    // return Math.sqrt(n);
};
console.log(raiz2(9));

// Arrow function (utulizada na atualidade)
// - Exemplo para bloco com mais de uma linha de instrução
const raiz3 = (n) => {
    return Math.sqrt(n);
};
console.log(raiz3(16));

// - Exemplo para bloco com apenas uma linha de instrução
const raiz4 = (n) => Math.sqrt(n);
console.log(raiz4(25));

// - Exemplo para bloco com apenas uma linha de instrução e apenas um parâmetro
const raiz5 = n => Math.sqrt(n);
console.log(raiz5(36));
