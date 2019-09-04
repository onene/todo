import React, { Component } from 'react';
import classes from './Input.module.css'

class Input extends Component {
    constructor(props) {
        super()
        this.state = {
            inputText: ''
        }
    }
    addTask = () => {
        if (this.state.inputText !== '') {
            this.props.addTask(this.state.inputText)

        }
        this.setState({
            inputText: ''
        })
    }
    handleInput = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    render() {
        return (
            <div className={classes.inputcomponent}>
                <input type="text" onChange={this.handleInput} value={this.state.inputText} placeholder="enter your task" />
                <button onClick={this.addTask} className={classes.add}>Add task</button>
            </div>
        );
    }
}

export default Input;