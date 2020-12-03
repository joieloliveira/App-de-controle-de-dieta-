import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Main from './pages/main';
import Inserir from './pages/inserir';
import Criar from './pages/criar';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/inserir" exact component={Inserir}></Route>
                <Route path="/criar" exact component={Criar}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;