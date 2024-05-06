import { createContext, useContext } from "react";

export const Todocontext=createContext({
    todos:[
        {
        id: 1,
        todo: " Todo msg",
        completed: false,
        }
],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    Complete: (id) => {}
})

export const TodoProvider=Todocontext.Provider

export default function useTodo(){
    return useContext(Todocontext)
}