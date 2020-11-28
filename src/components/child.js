import React, { Component } from 'react';

function ChildGreet ( prob ) {

    
    return (
        //<button onClick = {prob.GreetHandle} >click me to greet parent</button>
        <button onClick = {() => prob.GreetHandle('child here')} >click me to greet parent</button>
    )
}

export default ChildGreet;