import React, { Component } from 'react';

import Header from './components/Header';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  state ={
    isOpen:false
  }
  render() {
    return (
     <div>
       <Header/>
       <button type="button" onClick={() => this.setState({isOpen: true})}> My Button </button>
       
      </div>
    );
  }
}

export default App;
