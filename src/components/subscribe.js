import React, { Component } from 'react';

class Subscribe extends Component {

    constructor() {
        super();
        this.state = {
            message : "Hello please Subscribe"
        }
    
    }

    changeMessage() {
        this.setState({
            message : "Thanks for Subscribing"
        });
        console.log('hello there');
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default Subscribe