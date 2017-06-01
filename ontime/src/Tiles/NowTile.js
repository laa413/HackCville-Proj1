import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './NowTile.css'
import NowPage from '../Pages/NowPage.js'

class NowTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.className
    };
    //{this.state.title}
  }

  render() {
    return (
      <div className='NowTile'>
        <h1 className="tileName">Now</h1>
        <Router>
          <div><button className="editButton"><Link to='/calendar'>+</Link></button>

            <Route path='/calendar' component={NowPage}/>
          </div>
          </Router>
        <div className="content"></div>
      </div>
    )
  }
}
export default NowTile