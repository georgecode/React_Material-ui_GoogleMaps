import React from 'react';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
import Test from '../appBarDropDown';


function alertHello() {
  alert('HELLO');
}

const Navbar = () => (
	<div>
      <AppBar
      	title= "stuff"
      	onLeftIconButtonTouchTap={alertHello}
      />
      <Test />
    </div>     
);

export default Navbar;