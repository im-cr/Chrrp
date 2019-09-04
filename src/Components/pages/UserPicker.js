import React, { Component } from 'react';
import {pickUser} from '../../utils/utils';


class UserPicker extends Component { 
  userName= React.createRef();

  goToTweet = (e) =>{
    e.preventDefault();
    //get user id
    const userId = this.userName.current.value;

    //push to window
    this.props.history.push(`/user/${userId}/`);
  }

  render(){    
    
    return (
        <div className="container __picker">
          <form className="form __picker" onSubmit={this.goToTweet}>
            <h2 className="form __title">Enter a Username</h2>
            <input type="text"
              required 
              defaultValue={pickUser()}              
              ref={this.userName}
              disabled
            />
            <button type="submit" className="btn form">View User Stream</button>
          </form>
        </div>
    )
  };
}

export default UserPicker;
