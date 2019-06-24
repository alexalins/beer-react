import React, { Component } from 'react';
import './CardInicial.css';
import Lista from '../lista/Lista';

class CardInicial extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h1>Lista de Cervejas</h1>
                    <Lista/>
                </div>
            </div>
        );
    }
}

export default CardInicial;