import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>OnTime</h2>
        </div>

        <div className="top">
          <div className="NowTile">
            <h1>Now</h1>
            <div className="hello">
              <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ol>
            </div>
            
          </div>

          <div className="EventTile">
            <h1>Event</h1>
          </div>
        </div>

        <div className="bottom">
          <div className="ReminderTile">
            <h1>Reminder</h1>
          </div>

          <div className="ToDoTile">
            <h1>Todo</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
