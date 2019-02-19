import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    userName : ['Jyothi','Saravana','Varun']
  }

  manipulateStateHandler = (event) => {
    this.setState(
      {
        userName: [event.target.value , 'SPR' , 'VSS']
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>My First React Assignment</h1>
        <UserInput inputChange={this.manipulateStateHandler} initValue={this.state.userName[0]}/>
        <UserOutput userName={this.state.userName[0]}/>
        <UserOutput userName={this.state.userName[1]}/>
        <UserOutput userName={this.state.userName[2]}/>
      </div>
    );
  }
}

export default App;
