import React, { Component } from 'react';
// import { AppContext } from './AppContext';
import { AppProvider } from './AppContext';
// import userAccounts from '../accounts';

class AppState extends Component{
  
  
  render(){
    return (
      <AppProvider
        value={{
          ...this.state
        }}
      >
        {this.props.children }
      </AppProvider>
    )
  }
  
}


export default AppState;