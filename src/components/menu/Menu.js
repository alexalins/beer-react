import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/"> Inicio </Link>
                    <Link to="/sobre"> Sobre</Link>
                </ul>
            </div>
        );
    }
}

export default Menu;