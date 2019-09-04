import React, { Component } from 'react';
import TodoItem from './todoItem/TodoItem';
import classes from './todoList.module.css'


class TodoList extends Component {

    render() {
        let items = this.props.todos.map((item, index) => {

            return <li key={item.id}><TodoItem
                todo={item.text}
                key={item.id}
                index={index}
                done={item.done}
                deleteTask={this.props.deleteTask}
                doneTask={this.props.doneTask} />
            </li>

        })

        return (
            <div className={classes.todolist}>
                <ul>
                    {items}
                </ul>

            </div>
        );
    }

}

export default TodoList;