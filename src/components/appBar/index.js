import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Hamburger from '../appBarDropDown';


function alertHello() {
  alert('HELLO');
}

const Navbar = () => (
	<div>
      <AppBar
      	title= "stuff"
      	iconElementRight={<IconButton><NavigationClose /></IconButton>}
      	iconElementLeft ={<Hamburger />}
      	onLeftIconButtonTouchTap={alertHello}
      />
      
    </div>     
);

export default Navbar;