import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class SimpleTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: this.props.className,
        color: this.props.style
    }
  }

  render() {
    return (
      <div className='SimpleTile'>
        <h1 className="tileName">{this.state.title}</h1>
        <button className="editButton">+</button>
        <div className="content"></div>
      </div>
    )
  }
}
export default SimpleTile