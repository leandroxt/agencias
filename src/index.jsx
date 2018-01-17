import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/app/App';
import AgenciaStore from './stores/agenciaStore';
import './index.less';

const stores = {
    agenciaStore: new AgenciaStore()
};

const app = (
    <Provider {...stores}>
        <App />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
