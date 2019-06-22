import React, { Component } from 'react';
import api from '../../services/api';

class Home extends Component {

    componentDidMount() {
        api.get().then(
            res => {
                console.log(res);
                console.log(res.data);
            }
        )
    }

    render() {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    }
}

export default Home;