import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import TodoItem from "./Component/Todoitem";
import AddTodo from "./Component/AddTodo";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, todo) => {
    settodos((prev) => {
      return prev.map((val) => (val.id == id ? todo : val));
    });
  };

  const deleteTodo = (id) => {
    settodos((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };

  const Complete = (id) => {
    settodos((prev) => {
      return prev.map((val) => {
        if (val.id === id) {
          return { ...val, completed: !val.completed };
        } else {
          return val;
        }
      });
    });
  };
  useEffect(() => {
      const todo = JSON.parse(localStorage.getItem("todos"));
      if (todo && todo.length > 0) {
        settodos(todo);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, Complete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
