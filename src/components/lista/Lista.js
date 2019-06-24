import React, { Component } from 'react';
import axios from 'axios';
import './Lista.css';

const BeersList = (props) => {
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                {props.list.map(beers => (
                    <li>{beers.name}</li>
                ))}
            </ul>
        </div>
    )
}

class Lista extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        this.paginacao(1);
    }

    paginacao = (e) => {
        axios.get('https://api.punkapi.com/v2/beers?page=' + e).then(
            res => {
                this.setState({ beers: res.data});
                console.log(this.state.beers);
            }
        )
    }

    render() {
        return (
            <div>
                <BeersList list={this.state.beers}/>
            </div>
        );
    }
}

export default Lista;