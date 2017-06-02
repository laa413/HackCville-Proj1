import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './EventPage.css'

class EventPage extends Component {
  render () {
    return (
      <div className='EventPage'>
        <div className='left'>
          <h1>Events</h1>
        </div>
        <div className='right'>
          <h1>Add Event</h1>
        </div>
      </div>
    )
  }
}

export default EventPage