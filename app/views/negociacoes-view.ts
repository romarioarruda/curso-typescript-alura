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
                ${this.escreveLinhas(model)}
            </tbody>
        </table>
        `;
    }

    private escreveLinhas(model: Negociacoes): string {
        return model.lista().map(negociacao => {
            return `
                <tr>
                    <td>${this.formatar(negociacao.data)}
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

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}