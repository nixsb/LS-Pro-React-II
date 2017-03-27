//functional component it has no state
import React from 'react';
import './App.css';

export default function(props) {

  return (
    <div className="navbar">
      <h1>{props.title}</h1>
    </div>
  );

}
