import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './ToDoTile.css'
import TaskCreator from '../Components/TaskCreator/TaskCreator.js'
import TaskList from '../Components/TaskList/TaskList.js'

class ToDoTile extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {name: "Task 1"}, 
        {name: "Task 2"},
        {name: "Task 3"},
        ]
    }
  }

  removeTask(index){
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1); 
    this.setState({tasks: tasks});

  }

  createTask(e){

    //Only fire on enter
    if (e.which !== 13)
      return;

    const tasks = this.state.tasks.slice(0);
    tasks.push({name: e.target.value});
    this.setState({tasks: tasks});

  }


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className='ToDoTile'>
        <h1>To-Do</h1>
         <div>
    
         <TaskCreator className = "block_3" onKeyUpHandler={this.createTask.bind((this))} />
         <TaskList removeTask={(id) => this.removeTask(id)} tasks={this.state.tasks}/>
        
        </div>
      </div>
    )
  }
}
export default ToDoTile