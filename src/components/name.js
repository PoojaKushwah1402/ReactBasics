import React from 'react';
import './mystyle.css'
//import style from './stylesheet.module.css'

function NameList(prob) {
    const Name = ['first','second','third','first'];
   // const list = Name.map( (name, index) => <h1 className={style.third} key={index}> {index} with { name }</h1> );
   const list = Name.map( (name, index) => <h1 className={prob.style} key={index}> {index} with { name }</h1> );

    return (
        <div>
            {list}
        </div>
    )
}

export default NameList;