import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Timer from './TimerPage.js'

import './NowPage.css'
import '../App.css'

class NowPage extends Component {
  render () {
    return (
      <div className='NowPage'>
        <div className='left'>
          <h1>Pomodoro</h1>
          <Timer />
          <br />
          <Timer />
          <br />
          <Timer />
          <br />
          <Timer />
        </div>
        <div className='right'>
        </div>
      </div>
    )
  }
}

export default NowPage