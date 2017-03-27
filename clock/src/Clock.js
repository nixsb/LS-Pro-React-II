//functional component it has no state
import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component {
  //add state with this class that is added to all components with state
  constructor(props) {
    super(props);
    //initial state to object
    this.updateTime = this.updateTime.bind(this);
    this.state = {
      now: new Date() 
    }
  }

  componentDidMount(){
    setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.setState({
      now: new Date()
    });
  }

  render() {
    const currentDate = this.state.now.toLocaleString();
    return (
      <div>
        <p>Date: {currentDate}</p>
      </div>
    );
  }
}
