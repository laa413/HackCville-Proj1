import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Timer from '../Pages/TimerPage.js'

import './NowPage.css'
import '../App.css'

class NowPage extends Component {
  render () {
    return (
      <div className='NowPage'>
        <div className='bigDiv1'>
          <h1>Pomodoro</h1>
          <div className="container">
          <div className="pomo">
            <Timer />
            <br />
            <Timer />
            <br />
            <Timer />
            <br />
            <Timer />
            <br />
            <Timer />
          </div>
          <div className="picRight"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NowPage