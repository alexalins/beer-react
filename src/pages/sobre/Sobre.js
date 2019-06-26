import React, { Component } from 'react';
import CardInfo from '../../components/cardInfo/CardInfo';

class Sobre extends Component {
    render() {
        return (
            <div>
                <CardInfo id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default Sobre;