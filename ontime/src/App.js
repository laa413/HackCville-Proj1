import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NowTile from './NowTile.js'
import EventTile from './EventTile.js'
import RemindTile from './RemindTile.js'
import ToDoTile from './ToDoTile.js'
import SideBar from './SideBar.js'
import NowPage from './NowPage.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import UserInput from './EventTile.js'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <AppBar title='OnTime' showMenuIconButton={false} />
        </MuiThemeProvider>

        <div className="SideBar">
          <SideBar />
          {/*<Route path="/now" component={NowPage}/>*/}
      {/*<Route path="/events" component={EventPage}/>*/}
          <div className="Productivity">
            <h3>Productivity</h3>
            <img src="https://www.internetmarketingninjas.com/blog/wp-content/uploads/2012/07/6-cool-productivity-charts-03-1.png" />
            <p>This will be the space for the productivity data (score/chart).  Image above is the current placeholder</p>
          </div>
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
