import React, { Component } from 'react';
import MountingChild from './mountingchild'

class Mounting extends Component {

    constructor(Props) {
        super(Props)

        this.state = {
            name : 'Pooja'
        }
        console.log('Constructor');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    changeHandler = ()=> {
        this.setState({
            name : 'Kushwah'
        })
    }

    render() {
        console.log('render');
        return( 
        <div>
        <h1>Hello there</h1> 
        <MountingChild/>
        <button onClick = {this.changeHandler} > {this.state.name}</button>
        </div>
        )
    }

}

export default Mounting