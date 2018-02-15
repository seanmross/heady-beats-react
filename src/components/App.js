import React, { Component } from 'react';
import Landing from './Landing'
import Navigation from './Navigation'
// Theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import grey from 'material-ui/colors/grey'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: grey[50],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
    },
  },
})

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme} >
          <Navigation />
          <Landing />
        </MuiThemeProvider>
      </div>
      
    )
  }
}

export default App;
