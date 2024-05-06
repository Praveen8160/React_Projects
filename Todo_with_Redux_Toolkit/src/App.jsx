import "./App.css";
import AddTodo from "./Componenets/AddTodo";
import DisplayTodo from "./Componenets/DisplayTodo";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import { useState } from "react";
function App() {

  return (
    <Provider store={store}>
      <h1>My Todos</h1>
      <AddTodo />
      <DisplayTodo/>
    </Provider>
  );
}

export default App;
