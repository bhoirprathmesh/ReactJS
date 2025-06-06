import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice.js';

export const store = configureStore({
    reducer: todoReducer
})

//Note : In ReduxToolKit there is a single store(it is the singal source of truth)