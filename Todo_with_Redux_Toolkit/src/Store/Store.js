import { configureStore } from '@reduxjs/toolkit';
import { Todoreducer } from '../feature/Todo/TodoSlice';
export const store = configureStore({
    reducer:Todoreducer
})