import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './AboutPage.css'
import '../App.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='NowPage'>
        <div className='bigDiv'>
          <h1>About Us</h1>
          <h3>This site was created by Lindsey Abramson & Hung Tang.  (C) May 2017</h3>
        </div>
      </div>
    )
  }
}

export default AboutPage