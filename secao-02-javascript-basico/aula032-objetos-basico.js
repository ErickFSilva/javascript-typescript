// - Array
const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';

console.log(array);


// - Variáveis
const nome01 = 'Luiz';
const sobrenome01 = 'Oliveira';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;


// - Objeto literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 36
};

console.log(pessoa.nome);


// - Função factory (retorna um objeto)
// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Erick', 'Ferreira', 36);
const pessoa2 = criaPessoa('Raquézia', 'Ferreira', 35);
const pessoa3 = criaPessoa('Gabriel', 'Ferreira', 11);
const pessoa4 = criaPessoa('Gabriely', 'Ferreira', 7);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);


// - Quando uma função está dentro de um objeto ela é chamado de método
const pessoa5 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atuel é ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    }
}

pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();