import React, { Component } from 'react';
import Task from './Task.js';
import './TaskList.scss'

class TaskList extends Component {
    render(){
        const tasks = this.props.tasks;
        const removeTask = this.props.removeTask;
        return (
            <ul className = "task--list">
              {tasks.map((task,id) => {
                  task.id = id;
                  return ( 
                    <Task onClickHandler={(id) => removeTask(id)} task={task} />
                  ); 
              })}
            </ul>
        )    
    }
}

export default TaskList;