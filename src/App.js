import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './components/appBar';
import './App.css';
import Mapcontainer from './components/map';

// import GoogleApiWrapper from './components/map2';

// import AppBarExampleIcon from './components/navBar/navBar'



// import AddTodo from './components/addTodo/';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Navbar />
        <Mapcontainer />

        
      
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
