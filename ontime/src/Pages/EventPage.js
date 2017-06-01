import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './EventPage.css'
import '../App.css'

class EventPage extends Component {
  render () {
    return (
      <div className='EventPage'>
        <div className='left'>
          <h1>General</h1>
        </div>
        <div className='right'>
          <h1>Account Settings</h1>
        </div>
      </div>
    )
  }
}

export default EventPage