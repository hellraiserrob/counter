import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer.jsx'

import io from 'socket.io-client'

const socket = io.connect()

socket.emit('hello', 'rob');

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
