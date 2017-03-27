//functional component it has no state
import React, { Component } from 'react';
import './App.css';

export default class Counter extends Component {
  //add state with this class that is added to all components with state
  constructor(props) {
    super(props);
    //initial state to object
    this.incrementCount = this.incrementCount.bind(this);
    this.state = {
      count: 0
    }
  }

  incrementCount() {
    // this.setState({
    //   //console.log(this.state.count);
    //   count: this.state.count + 1
    // });
    this.setState(currentState => {
      return {
        count: currentState.count + 1
      };
    })
    
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incrementCount}>Inecrement</button>
      </div>
    );
  }
}
