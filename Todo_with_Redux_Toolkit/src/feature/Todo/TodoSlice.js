import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState= {
    todos: [{id: 1, text: "Hello world",iseditable:false}]
}

const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                iseditable:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            const { id, newValue } = action.payload;
            const upval=state.todos.map((todo)=>todo.id === id ? { ...todo, text: newValue,iseditable:false } : todo)
            state.todos=upval
        },
        updateEditable:(state,action)=>{
            const newval=state.todos.map((todo)=>todo.id === action.payload ? { ...todo,iseditable:true}:todo)
            state.todos=newval
        }
    }
})
export const{addTodo,removeTodo,updateTodo,updateEditable}=TodoSlice.actions

export const Todoreducer=TodoSlice.reducer