import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super();

  this.state = {
    texto: ''
  }
}

handleChange = (event) => {(
  this.setState({texto: event.target.value})
)}


  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handleChange} value={this.state.texto}/>
    <p className="repeater">{this.state.texto}</p>
      </div>
    );
  }
}

export default App;
