import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './NowPage.css'
import '../App.css'

class NowPage extends Component {
  render () {
    return (
      <div className='NowPage'>
        <div className='left'>
          <h1>Calendar</h1>
        </div>
        <div className='right'>
          <h1>List of all on selected day</h1>
        </div>
      </div>
    )
  }
}

export default NowPage