import React, { Component } from 'react';

const greeting = 'Hello Daniel';
const loggedIn = true;

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>{loggedIn ? greeting : 'Not logged in'}</h1>
        <h2>React Skeleton</h2>
      </div>
    );
  }
}