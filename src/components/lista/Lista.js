import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import './Lista.css';

const BeersList = (props) => {
    return (
        <div>
            <ListGroup variant="flush">
                {props.list.map(beers => (
                    <ListGroup.Item key={beers.id}>{beers.name} - {beers.tagline}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

class Lista extends Component {

    state = {
        beers: [],
        valor: 0
    }

    componentDidMount() {
        this.paginacao(1);
    }

    paginacao = (e) => {
        e = e + this.state.valor;
        axios.get('https://api.punkapi.com/v2/beers?page=' + e).then(
            res => {
                this.setState({ beers: res.data, valor: e });
                console.log(this.state.beers);
                console.log(this.state.valor);
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="primary" onClick={() => this.paginacao(-1)}>Anterior</Button>
                    <Button variant="primary" onClick={() => this.paginacao(1)}>Próximo</Button>
                </div>
                <BeersList list={this.state.beers} />
            </div>
        );
    }
}

export default Lista;