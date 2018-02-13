import React, { Component } from 'react';
import Landing from './Landing'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Landing />
      </div>
      
    )
  }
}

export default App;
