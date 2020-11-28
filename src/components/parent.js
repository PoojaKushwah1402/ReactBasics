import React, { Component } from 'react';
import ChildGreet from './child'

class ParentClass extends Component {
    constructor() {
        super();
        this.state = {
            parent : 'Im parent'
        }

        this.GreetParent = this.GreetParent.bind(this)
    }

    GreetParent(child) {
       alert(`Hello ${this.state.parent} from ${child}`)

    }

    render() {
        return (
            <div>
                <ChildGreet GreetHandle = {this.GreetParent}  />
            </div>
        );
    }
}

export default ParentClass;