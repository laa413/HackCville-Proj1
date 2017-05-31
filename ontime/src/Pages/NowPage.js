import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css'
import SideBar from '../src/Components/SideBar.js'
import ProdTile from '../src/Components/ProdTile.js'
import Dashboard from '../src/Pages/Dashboard.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class NowPage extends Component {
  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <AppBar title='OnTime' showMenuIconButton={false}/>
        </MuiThemeProvider>

        <div className="SideBar">
          <SideBar />
          <ProdTile />
        </div>

        <Dashboard />
      </div>
    )
  }
}

export default NowPage
