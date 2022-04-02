import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Formulário não foi encontrado na DOM.');
}

const btnImportar = document.querySelector('#btn-importa');
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        controller.importarDados()
    });
} else {
    throw Error('Botão de importar não encontrado na DOM');
}
