import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import NowTile from './NowTile.js'
import EventTile from './EventTile.js'
import RemindTile from './RemindTile.js'
import ToDoTile from './ToDoTile.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <AppBar title='OnTime' showMenuIconButton={false} />
        </MuiThemeProvider>

        <div className="SideBar">
          
        </div>
        <div className="Dashboard">
          <div className='top'>
            <NowTile />
            <EventTile />
          </div>

          <div className='bottom'>
            <RemindTile />
            <ToDoTile />
          </div>
        </div>
      </div>
    )
  }
}

export default App
