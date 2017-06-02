import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './ToDoPage.css'

class ToDoPage extends Component {
  render () {
    return (
      <div className='ToDoPage'>
        <div className='left'>
          <h1>ToDoList</h1>
        </div>
        <div className='right'>
          <h1>Add ToDo</h1>
        </div>
      </div>
    )
  }
}

export default ToDoPage