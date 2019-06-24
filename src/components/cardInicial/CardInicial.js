import React, { Component } from 'react';
import './CardInicial.css';
import Lista from '../lista/Lista';
import { Card } from 'react-bootstrap';

class CardInicial extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Lista />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardInicial;