import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/" className="titulo"> React Beer </Link>
            </div>
        );
    }
}

export default Menu;