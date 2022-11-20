//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']; // cria o array alunos

console.log('Array com ' + alunos.length + ' posições'); // conta as posições existente no array
console.log(alunos); // imprime todo o array
console.log();

alunos[0] = 'Eduardo'; // substitui o aluno da posição "0"
console.log(alunos);

alunos[alunos.length] = 'Luiza'; // adiciona aluno no final do array
console.log(alunos);

alunos.push('Otávio'); // adiciona um aluno no final do array
console.log(alunos);

alunos.unshift('Pedro'); // adiciona um aluno no início do array
console.log(alunos);

alunos.pop(); // remove o aluno da última posição do array
console.log(alunos);

alunos.shift(); // rmove o aluno da primeira posiçaõ do array
console.log(alunos);

delete alunos[1]; // apaga o aluno da posição "1" do array
console.log(alunos);

alunos[1] = 'Erick'; // adiciona o aluno da posição "1" do array
alunos.push('Maria');
console.log(alunos);

console.log(alunos.slice(0, 3)); // imprime o array de alunos informando a sequência
console.log(alunos.slice(0, -1)); // imprime o array de alunos menos a quantidade informada

console.log(typeof alunos);
console.log(alunos instanceof Array); // retorna true se for uma instância de "array"