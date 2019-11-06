import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeatContent.bind(this)} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  repeatContent(e){
    this.setState({
      text: e.target.value
    })
  }
}

export default App;
