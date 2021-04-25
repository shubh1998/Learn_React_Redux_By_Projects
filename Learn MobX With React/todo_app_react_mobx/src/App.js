import React from "react";
import AddTodo from "./Pages/AddTodo";
import Header from "./Pages/Header";
import TodoList from "./Pages/TodoList";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App