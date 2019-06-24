import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Beer React</Navbar.Brand>
                </Navbar>
            </div>
            );
        }
    }
    
export default Menu;