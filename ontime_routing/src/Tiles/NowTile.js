import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './NowTile.css'
import NowPage from '../Pages/NowPage.js'
import ReactCountdownClock from 'react-countdown-clock'
import myCallback from 'react-countdown-clock'

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
          <ReactCountdownClock className="clock" seconds={1500}
                     color="#F00"
                     alpha={0.9}
                     size={100}
                     onComplete={myCallback}
                      />
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