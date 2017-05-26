import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
      </div>
    )
  }
}
export default ToDoTile