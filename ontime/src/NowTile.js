import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NowPage from './NowPage.js'
import './NowTile.css'

class NowTile extends Component {
  constructor() {
    super()
    this.state = {
      type: null,
      name: null,
      time: null,
      loc: null
    }
  }

  render() {
    return (
      <div className='NowTile'>
        <h1>Now</h1>
        <button className="editButton">+</button>
      </div>
    )
  }
}
export default NowTile