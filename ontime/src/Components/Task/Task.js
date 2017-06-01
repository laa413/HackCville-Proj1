import React, { Component } from 'react';
import './Task.scss';

class Task extends Component {
    render(){
        const task = this.props.task
        return (
            <li className="task" onClick={() => this.props.onClickHandler(task.id)} key={task.id}> 
                {task.name}
            </li>
        );
    }
}