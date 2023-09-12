import React, { Component } from 'react';

class ClassComponent extends Component {
    state={
      username:"ismail"
    }

    handleChange=(event)=>{
      this.setState(
        {username:event.target.value}
      )
    }
  
  render() {
    return (
      <div>
        {this.state.username} <br/>
        <input type='name' onChange={this.handleChange} /><br/>
      </div>
    )
  }
}
export default ClassComponent;
