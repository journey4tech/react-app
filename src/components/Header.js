import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


class Header extends Component {
  state ={
    isOpen:false
  }
  render() {
    return (
      <div>
      <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon  onClick={() => this.setState({isOpen: true})} />
            </IconButton>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>

          
        </AppBar>
        <Drawer open={this.state.isOpen} onClose={() =>this.setState({isOpen:false})}>
        <div>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
        </div>
      </Drawer>
      </div>

       
    )
  }
}

export default Header;