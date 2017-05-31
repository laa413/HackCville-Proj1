import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './NowTile.css'

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
        <button className="editButton">+</button>
        <div className="content"></div>
      </div>
    )
  }
}
export default NowTile