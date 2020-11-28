import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            name : ''
            ,topic : 'select',
           comment : ''
        }
    }

    nameHandle = (event) => {
        this.setState({
            name : event.target.value
        })
        console.log(event.target.value);
    }

    commentHandle = e => {
        this.setState({
            comment : e.target.value
        })
    }

    topicHandle = e => {
        this.setState({
            topic : e.target.value
        })
    }

    onSubmitEvent = e => {
        e.preventDefault();
        alert(this.state.name+ ' '+ this.state.comment + ' ' +this.state.topic);
    }

    render() {

        return (
            
             <form onSubmit={this.onSubmitEvent} >
               <div>
                <label id='username' >Name</label>
             <input 
                type='text'
                htmlFor='username'
                value={this.state.name} 
                onChange = {this.nameHandle}
               /> </div>

                <div>
               <label id='comments' >Comment</label>
               <textarea type='text' htmlFor='comments' 
               value={this.state.comment}
                onChange = {this.commentHandle} /></div>

                <div>
                <label>Topic</label>
                <select onChange = {this.topicHandle} value={this.state.topic} >
                    
                    <option>React</option>
                    <option>vue</option>
                    <option>Angular</option>
                    <option   defaultChecked    >Select</option>
                </select> </div>

                <button type='submit'  >Submit</button>
             
            </form>
            
        )

    }
}

export default Form;