import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Test from '../appBarDropDown';


function alertHello() {
  alert('HELLO');
}

const Navbar = () => (
	<div>
      <AppBar
      	title= "stuff"
      	iconElementRight={<IconButton><NavigationClose /></IconButton>}
      	iconElementLeft ={<IconButton><Menu /></IconButton>}
      	onLeftIconButtonTouchTap={alertHello}
      />
      <Test />
    </div>     
);

export default Navbar;