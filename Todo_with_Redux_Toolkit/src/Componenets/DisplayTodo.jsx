import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  updateTodo,
  updateEditable,
} from "../feature/Todo/TodoSlice";
function DisplayTodo() {
  const [value, setvalue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black bg-[#ccbed7]"
        >
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
              todo.iseditable ? "border-black/10 px-2" : "border-transparent"
            }`}
            value={todo.iseditable ? value : todo.text}
            onChange={(e) =>
              todo.iseditable ? setvalue(e.target.value) : null
            }
            readOnly={!todo.iseditable}
          />
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={(e) => {
              if (todo.iseditable) {
                let id = todo.id;
                dispatch(updateTodo({ id, value }));
              } else {
                dispatch(updateEditable(todo.id));
              }
            }}
          >
            {todo.iseditable ? "📁" : "✏️"}
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default DisplayTodo;
