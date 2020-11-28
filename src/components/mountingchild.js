import React, { Component } from 'react'

class MountingChild extends Component {

    constructor(Props) {
        super(Props)

        this.state = {
            name : 'Pooja'
        }
        console.log('Constructor child');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps child');
        return null
    }

    componentDidMount() {
        console.log('componentDidMount child');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate child');
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate child');
        return null;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate child')
    }

    render() {
        console.log('render child');
        return( <h1>Hello there child</h1> )
    }

}

export default MountingChild