import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.formataLinhas(model)}
                </tbody>
            </table>
        `;
    }

    private formataLinhas(model: Negociacoes) {
        return model.lista().map(negociacao => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat()
                        .format(negociacao.data)}
                    </td>
                    <td>
                        ${negociacao.quantidade}
                    </td>
                    <td>
                        ${negociacao.valor}
                    </td>
                </tr>
            `;
        }).join('')
    }
}