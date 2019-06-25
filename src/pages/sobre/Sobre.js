import React, { Component } from 'react';
import Axios from 'axios';

class Sobre extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log('id:' + id);
        Axios.get('https://api.punkapi.com/v2/beers/' + id).then(
            res => {
               console.log(res.data[0]);
            }
        )
    }

    render() {
        return (
            <div>
                <h1>SOBRE</h1>
            </div>
        );
    }
}

export default Sobre;