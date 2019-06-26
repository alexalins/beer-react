import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
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
                                <Card.Body>
                                    <Card.Title>{this.state.beer.name}</Card.Title>
                                    <Card.Text>{this.state.beer.description}</Card.Text>
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