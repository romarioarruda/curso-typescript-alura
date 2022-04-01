import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(!form) throw new Error('Formulário não foi reconhecido.')

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
