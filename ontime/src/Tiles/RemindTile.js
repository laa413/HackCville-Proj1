import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './RemindTile.css'
import RemindPage from '../Pages/RemindPage.js'

class RemindTile extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      time: null,
      loc: null
    }
  }

  render() {
    return (
      <div className='RemindTile'>
        <h1>Reminders</h1>
       <Router>
          <div>
            <button className="editButton3"><Link to='/remindpage'>+</Link></button>
            <Route exact path='/remindpage' component={RemindPage}/>
          </div>
          </Router>
      </div>
    )
  }
}
export default RemindTile