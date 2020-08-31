import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import image from "./images/undraw.png";

const todos = [
  {
    id: 1,
    task: "Jump into a leaf pile",
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
      completeTask: () => {},
    };
  }

  completeTask = (clickedItemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === clickedItemId) {
          console.log("complete", item.id, clickedItemId);
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return { ...item, item };
        }
      }),
    });
  };

  addTask = (taskName) => {
    const newTodo = {
      id: new Date().getTime(),
      task: taskName,
      completed: false,
    };
    return this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearTask = (e) => {
    e.preventDefault();
    return this.setState({
      todos: this.state.todos.filter((item) => {
        if (item.completed === true) {
          return (item = undefined);
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <img src={image} className="image" alt="" />
        <h2>Welcome to your fall bucket list!</h2>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
        <TodoList todos={this.state.todos} completeTask={this.completeTask} />
      </div>
    );
  }
}

export default App;
