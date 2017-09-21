import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import AppBarExampleIcon from './components/navBar/navBar'
import logo from './logo.svg';
import './App.css';
// import AppBarExampleIcon from './components/navBar/navBar'



// import AddTodo from './components/addTodo/';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <RaisedButton label="Material UI Button" />

      </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
