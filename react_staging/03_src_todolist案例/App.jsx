import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打豆豆", done: false },
    ],
  };
  addTodo = (todoObj) => {
    let { todos } = this.state;
    let newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };
  deleteTodo = (id) => {
    let { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };
  updateTodo = (id, done) => {
    let { todos } = this.state;
    let newTodo = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: done };
      else return todo;
    });
    this.setState({
      todos: newTodo,
    });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({
      todos: newTodos,
    });
  };
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({
      todos: newTodos,
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            clearAllDone={this.clearAllDone}
            checkAllTodo={this.checkAllTodo}
            todos={todos}
          />
        </div>
      </div>
    );
  }
}
