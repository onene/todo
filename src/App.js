import React from 'react';
import './App.css';

import TodoList from './components/todoList/TodoList';
import Input from './components/inputComponent/Input'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      todos: [{
        id: 1,
        text: 'do something',
        done: false
      },
      {
        id: 2,
        text: 'do something else',
        done: false
      },
      {
        id: 3,
        text: 'do more',
        done: false
      },
      {
        id: 4,
        text: 'buy milk',
        done: false
      }, {
        id: 5,
        text: 'do homework',
        done: false
      }, {
        id: 6,
        text: 'cook dinner',
        done: false
      }, {
        id: 7,
        text: 'to call Max',
        done: false
      }]

    }
  }
  addTask = (text) => {
    let arr = this.state.todos
    arr.push({ id: new Date().getMilliseconds(), text: text, done: false })
    this.setState({ todos: arr })
    console.log(text)
  }
  deleteTask = (index) => {
    let updatedTodos = this.state.todos;
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos })
  }
  doneTask = (index) => {
    let updateDone = this.state.todos;
    updateDone[index].done = !updateDone[index].done
    this.setState({ todos: updateDone })

  }
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <h3>you have {this.state.todos.length} tasks</h3>
        <Input addTask={this.addTask} />
        <TodoList todos={this.state.todos}
          deleteTask={this.deleteTask}
          doneTask={this.doneTask} />
      </div>
    );
  }

}

export default App;


