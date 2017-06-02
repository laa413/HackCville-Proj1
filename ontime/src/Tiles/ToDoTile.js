import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './ToDoTile.css'
import ToDoPage from '../Pages/ToDoPage.js'

class ToDoTile extends Component {
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
      <div className='ToDoTile'>
        <h1>To-Do</h1>
        <Router>
          <div>
            <button className="editButton1"><Link to='/todopage'>+</Link></button>
            <Route exact path='/todopage' component={ToDoPage}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default ToDoTile