import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './RemindPage.css'

class RemindPage extends Component {
  render () {
    return (
      <div className='RemindPage'>
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

export default RemindPage