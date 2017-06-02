import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './EventTile.css'
import EventPage from '../Pages/EventPage.js'

class EventTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {name: "Task 1"}, 
        {name: "Task 2"},
        ]
    }
  }

  render() {
    return (
      <div className='EventTile'>
        <h1>Events</h1>
        <Router>
          <div>
            <button className="editButton2"><Link to='/eventpage'>+</Link></button>
            <Route exact path='http://localhost:3000/eventpage' component={EventPage}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default EventTile