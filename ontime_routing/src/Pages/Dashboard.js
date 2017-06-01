import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NowTile from '../Tiles/NowTile.js'
import '../Tiles/NowTile.css'
import EventTile from '../Tiles/EventTile.js'
import RemindTile from '../Tiles/RemindTile.js'
import ToDoTile from '../Tiles/ToDoTile.js'
import SimpleTile from '../Tiles/SimpleTile.js'
import './Dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='Dashboard'>
        <div className='top'>
          <NowTile />
          <EventTile />
        </div>
        <div className='bottom'>
          <RemindTile />
          <ToDoTile />
        </div>
      </div>
    )
  }
}

export default Dashboard