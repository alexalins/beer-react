import React, { Component } from 'react';
import { Card, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Axios from 'axios';
import './CardInfo.css'

class CardInfo extends Component {

    state = {
        beer: []
    }

    componentDidMount = () => {
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
                <Card className="card">
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <Card.Img variant="top" className="foto" src={this.state.beer.image_url} />
                            </Col>
                            <Col sm={8}>
                                <Card.Body className="cardInfo">
                                    <Card.Title> Name: {this.state.beer.name} </Card.Title>
                                    <Card.Text> Description: {this.state.beer.description} </Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem> Tagline: {this.state.beer.tagline} </ListGroupItem>
                                        <ListGroupItem> By Contributed: {this.state.beer.contributed_by}</ListGroupItem>
                                        <ListGroupItem> Tips Brewers: {this.state.beer.brewers_tips}</ListGroupItem>
                                        <ListGroupItem> PH: {this.state.beer.ph}</ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>
        );
    }
}

export default CardInfo;