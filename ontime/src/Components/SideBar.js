import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './SideBar.css'
import Dashboard from '../Pages/Dashboard.js'
import '../Tiles/EventTile.css'

class SideBar extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
          <div>
            <ul>
              <li><Link to='/'>Dashboard</Link></li>
              <li><Link to='/calendar'>Calendar</Link></li>
              <li><Link to='/settings&account'>Settings</Link></li>
              <li><Link to='/about&contact'>About & Contact</Link></li>
            </ul>
          </div>
            <Route exact path='/' component={Dashboard}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default SideBar