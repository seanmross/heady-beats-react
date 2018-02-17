import React, { Component } from 'react'
import Landing from './Landing'
import Navbar from './Navbar'
import Login from './Login'
import { Route, Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path='/' component={Login} />
        <Route path='/discover' component={Landing} />        

      </div>
    )
  }
}
