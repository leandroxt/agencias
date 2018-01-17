import React from 'react';
import { Link } from 'react-router-dom';

import './header.less';

export default () => (
    <div className="header">
        <div className="logo">
            AgênciasApp
            <div className="menu">
                <Link to="/agencias">Agencias</Link>
                <Link to="/cadastro">Cadastro</Link>
            </div>
        </div>
    </div>
);
