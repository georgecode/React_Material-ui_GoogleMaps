import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './components/appBar'
import './App.css';
// import AppBarExampleIcon from './components/navBar/navBar'



// import AddTodo from './components/addTodo/';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Navbar />


      
     {/* 

        <RaisedButton label="Material UI Button" />
        <AppBarExampleIcon />
      </div> */}
      </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
