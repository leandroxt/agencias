import React from 'react';
import { observer, inject } from 'mobx-react';

import './agencias.less';

@inject('agenciaStore')
@observer
export default class Agencias extends React.Component {
    componentDidMount() {
        const { agenciaStore } = this.props;
        agenciaStore.fetch();
    }
    
    render() {
        const { agenciaStore } = this.props;
        const { agencias } = agenciaStore;
        return (
            <div className="agencias">
                <h4>Agencias</h4>
                <div className="title">Id</div>
                <div className="title">Nome</div>
                <div className="title">Atributo</div>
                <hr/>
                {agencias.map(agencia => <Agencia key={agencia.id} {...agencia} />)}
            </div>
        );
    }
}

const Agencia = ({ id, nome, atributo }) => (
    <div className="box">
        <div className="column">{id}</div>
        <div className="column">{nome}</div>
        <div className="column">{atributo}</div>
    </div>
);
