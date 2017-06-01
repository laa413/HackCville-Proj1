import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './SettingsPage.css'
import '../App.css'

class SettingsPage extends Component {
  render () {
    return (
      <div className='NowPage'>
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

export default SettingsPage