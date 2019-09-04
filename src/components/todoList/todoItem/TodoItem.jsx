import React, { Component } from 'react';
import classes from './TodoItem.module.css';

class TodoItem extends Component {
    deleteTask() {
        this.props.deleteTask(this.props.index)
    }
    doneTask = () => {
        this.props.doneTask(this.props.index)
    }
    render() {

        return (
            <div className={classes.todoitem}>
                {
                    this.props.done ? <span className={classes.red}>{this.props.todo}</span> : this.props.todo

                }

                <button onClick={() => { this.deleteTask() }}>delete</button>
                <button onClick={() => { this.doneTask() }}>done</button>
            </div>
        );
    }
}

export default TodoItem;