import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './RemindPage.css'

class RemindPage extends Component {
  render () {
    return (
      <div className='RemindPage'>
        <div className='left'>
          <h1>Reminders</h1>
        </div>
        <div className='right'>
          <h1>Add Reminders</h1>
        </div>
      </div>
    )
  }
}

export default RemindPage