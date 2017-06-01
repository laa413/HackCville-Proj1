import React, { Component } from 'react'
import Task from '../Task/Task.js'
import './TaskList.scss'

class TaskList extends Component {
    render(){
        const tasks = this.props.tasks;
        const removeTask = this.props.removeTask;
        return (
            <div className = "task--list">
              {tasks.map((task,id) => {
                  task.id = id;
                  return ( 
                    <Task onClickHandler={(id) => removeTask(id)} task={task} />
                  ); 
              })}
            </div>
        )    
    }
}

export default TaskList;