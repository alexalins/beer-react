import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Lista.css';

const BeersList = (props) => {
    return (
        <div>
            <ListGroup variant="flush">
                {props.list.map(beers => (
                    <Link key={beers.id} to={`/sobre/${beers.id}`}><ListGroup.Item action className="link">{beers.name} - {beers.tagline}</ListGroup.Item></Link>
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
        axios.get(`https://api.punkapi.com/v2/beers?page=${e}`).then(
            res => {
                this.setState({ beers: res.data, valor: e});

                if(this.state.valor === 1) {
                    this.setState({ antes: true });
                } else {
                    this.setState({ antes: false });
                }

                if(this.state.beers.length === 0){
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
                    <Button variant="dark" className="button" onClick={() => this.paginacao(-1)} disabled={this.state.antes}>Previous</Button>
                    <Button variant="dark" className="button" onClick={() => this.paginacao(1)} disabled={this.state.prox}>Next</Button>
                </div>
                <BeersList list={this.state.beers} />
            </div>
        );
    }
}

export default Lista;