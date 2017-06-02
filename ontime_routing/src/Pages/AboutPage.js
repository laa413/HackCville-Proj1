import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './AboutPage.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='NowPage'>
        <div className='bigDiv'>
          <h1>About Us</h1>
          <h3>This site was created by Lindsey Abramson & Hung Tang.  (C) May 2017</h3>
          <div className="pic1">
            <img src="http://hackcville.com/launchstudents/img/abramson-lindsey.jpg" className="lindsey"/>
          </div>
          <div className="pic2">
            <img src="http://hackcville.com/launchstudents/img/tang-hung.jpg" className="hung"/>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage