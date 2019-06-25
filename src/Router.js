import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/sobre/:id" component={Sobre} />
                </Switch>
            </div>
        );
    }
}

export default Router;