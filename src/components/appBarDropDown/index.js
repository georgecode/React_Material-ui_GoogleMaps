import React from 'react';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Hamburger extends React.Component{

	constructor(props) {
	    super(props);

	    this.state = {
	      open: false,
	    };
	  }

  	_handleTouchTap = (event) => {
	    // This prevents ghost click.
	    event.preventDefault();
	    this.setState({
	      open: true,
	      anchorEl: event.currentTarget,
	    });
  	};

  	_handleRequestClose = () => {
    	this.setState({
      	  open: false,
    	});
 	};



	render(){
		return(
			
		<div>

		<IconButton>
		<MenuIcon 
			onClick={this._handleTouchTap}
		/>
		
		</IconButton>


        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this._handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="thing 1" />
            <MenuItem primaryText="thing 2" />
            <MenuItem primaryText="thing 3" />
            <MenuItem primaryText="thing 4" />
          </Menu>
        </Popover>
        </div>
			
			)
	}
}



export default Hamburger;

