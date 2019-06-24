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
        valor: 0,
        antes: false,
        prox: false
    }

    componentDidMount() {
        this.paginacao(1);
    }

    paginacao = (e) => {
        e = e + this.state.valor;
        axios.get('https://api.punkapi.com/v2/beers?page=' + e).then(
            res => {
                this.setState({ beers: res.data, valor: e});
                console.log(this.state.beers);
                console.log(this.state.valor);
                console.log('antes: ' + this.state.antes + ' &prox:' + this.state.prox);

                if(this.state.valor == 1) {
                    this.setState({ antes: true });
                } else {
                    this.setState({ antes: false });
                }

                if(this.state.beers.length == 0){
                    this.setState({ prox: true });
                } else {
                    this.setState({ prox: false });
                }
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="primary" className="button" onClick={() => this.paginacao(-1)} disabled={this.state.antes}>Anterior</Button>
                    <Button variant="primary" className="button" onClick={() => this.paginacao(1)} disabled={this.state.prox}>Próximo</Button>
                </div>
                <BeersList list={this.state.beers} />
            </div>
        );
    }
}

export default Lista;