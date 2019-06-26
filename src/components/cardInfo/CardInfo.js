import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Axios from 'axios';

class CardInfo extends Component {

    state = {
        beer: []
    }

    componentDidMount = () =>{
        let id = this.props.id;
        Axios.get('https://api.punkapi.com/v2/beers/' + id).then(
            res => {
                this.setState({ beer: res.data[0] })
                console.log(this.state.beer)
            }
        )
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={this.state.beer.image_url} width="100px" height="100px"/>
                    <Card.Body>
                        <Card.Title>{this.state.beer.name}</Card.Title>
                        <Card.Text>{this.state.beer.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardInfo;