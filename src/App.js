import logo from './logo.svg';
import './App.css';
import Extnd from './components/clasnew';
import Funcnew from './components/functnnew';
import React, { Component } from 'react';
import Subscribe from './components/subscribe'
import ParentClass from './components/parent'
import List from './components/list'
import NameList from './components/name'
import style from './stylesheet.module.css'
import './apps.css'
import Form from './components/form'
import Mounting from './components/mounting';
import Fragments from './components/fragments'

class App extends Component {
  render() {
    return (
      <div className="App">
           {/* <p className = {style.second} >hello world</p>
           <p className = 'third' >hello world</p> */}
         {/* <Extnd></Extnd>
          <Funcnew/>
          <Subscribe/> }
          <ParentClass />*/
         //  <List/>
         //  <NameList style={style.new} />
        // <Form/>
          }
        <Mounting/>
          <Fragments/>
      </div>
    );
  }
 
}

export default App;
