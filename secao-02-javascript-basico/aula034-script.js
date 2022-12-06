function meuEscopo() {

    // Paths
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // Array
    const pessoas = [];

    // Função que será utilizada pelo 'addEventListener'
    function recebeEventoForm(evento) {

        // - Instrução de impedi o envio do formulário pela página
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;

    }

    /**
     * Escutador de eventos no formulários
     * Escutará as ações do 'submit'
    */
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();