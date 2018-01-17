import { observable } from 'mobx';

import AgenciaService from '../services/AgenciaService';

export default class AgenciaStore {
    @observable agencias;

    constructor() {
        this.agencias = [];
    }

    fetch() {
        if (this.agencias.length === 0) {
            AgenciaService.fetchAll()
                .then((response) => {
                    this.agencias = response.data;
                });
        }
    }

    cadastro(agencia) {
        const agencias = this.agencias.slice();
        agencias.push(agencia);
        this.agencias = agencias;
    }
}