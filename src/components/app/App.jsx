import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from '../base/header/Header';
import Agencias from './Agencias';
import Cadastro from './Cadastro';
import './app.less';

export default () => (
    <Router basename="/">
        <div>
            <Header />
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (<Redirect to="/agencias" />)}
                />
                <Route path="/agencias" component={Agencias} />
                <Route path="/cadastro" component={Cadastro} />
            </div>
        </div>
    </Router>
);
