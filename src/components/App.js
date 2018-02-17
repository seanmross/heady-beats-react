import React, { Component } from 'react'
import Landing from './Landing'
import Navigation from './Navigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Landing />
      </div>
    )
  }
}
