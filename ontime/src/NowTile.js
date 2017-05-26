import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class NowTile extends Component {
  constructor() {
    super()
    this.state = {
      type: null,
      name: null,
      time: null,
      loc: null
    }
  }

  render() {
    return (
      <div className='NowTile'>
        <h1>Now</h1>
      </div>
    )
  }
}
export default NowTile