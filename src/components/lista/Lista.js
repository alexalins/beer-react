import React, { Component } from 'react';
import axios from 'axios';
import './Lista.css';

class Lista extends Component {
    componentDidMount() {
        this.paginacao(1);
    }

    paginacao = (e) => {
        axios.get('https://api.punkapi.com/v2/beers?page=' + e).then(
            res => {
                console.log(res.data);
            }
        )
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Lista;