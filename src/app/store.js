import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../fetaure/todo/todoSlice"

export const store =configureStore({

    reducer:todoReducer,
})