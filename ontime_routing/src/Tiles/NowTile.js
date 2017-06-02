import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './NowTile.css'
import NowPage from '../Pages/NowPage.js'
import ReactCountdownClock from 'react-countdown-clock'
import myCallback from 'react-countdown-clock'
import Timer from '../Pages/TimerPage.js'

class NowTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.className
    };
  }

  render() {
    return (
      <div className='NowTile'>
        <h1 className="tileName">Now</h1>
        <div className = "time">
          <Timer/>
          </div>
        <Router>
          <div>
            <Route exact path='/calendar' component={NowPage}/>
          </div>
          </Router>
        <div className="content"></div>
      </div>
    )
  }
}
export default NowTile