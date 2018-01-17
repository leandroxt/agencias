import React from 'react';
import { autobind } from 'core-decorators';
import { observer, inject } from 'mobx-react';

import './cadastro.less';

@inject('agenciaStore')
@autobind
@observer
export default class Cadastro extends React.Component {
    submit(e) {
        e.preventDefault();
        const { agenciaStore } = this.props;
        agenciaStore.cadastro({
            id: Math.random().toString(36).substring(2, 15),
            nome: this.nome.value,
            atributo: this.atributo.value
        });
        this.nome.value = '';
        this.nome.focus();
        this.atributo.value = '';
        this.props.history.push('/agencias');
    }

    render() {
        return (
            <div className="cadastro">
                <h4>Cadastro</h4>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        ref={(input) => { this.nome = input; }}
                        placeholder="Nome"
                    />
                    <br/>
                    <input
                        type="text"
                        ref={(input) => { this.atributo = input; }}
                        placeholder="Atributo"
                    />
                    <br/>
                    <button className="btn">Cadastrar</button>
                </form>
            </div>
        );
    }
}