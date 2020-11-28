import React, { Component } from 'react';
import ListHandle from './listHandle';

function List( probs ) {
    const NameList = ['pooja','priyanka','priya'];
    // const GreetName = NameList.map( name => <h1> Hello {name}, how are you </h1> )
    const GreetName = NameList.map( name => <ListHandle key = {name} Greet = {name} /> )


    return(
        <div>
            {GreetName} 
        </div>
    );
}

 export default List;