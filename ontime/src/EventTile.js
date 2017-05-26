import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class EventTile extends Component {
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
      <div className='EventTile'>
        <h1>Events</h1>
      </div>
    )
  }
}
export default EventTile