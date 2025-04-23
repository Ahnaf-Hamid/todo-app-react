import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: []}
export const slice = createSlice({
    name:'users',
    initialState,
    reducers: {
        AddTask: (state,action) => {
            state.value.push({ task:action.payload, complete:false})
        },
        DeleteTask: (state) => {
            state.value = initialState.value
        },
        DelOne: (state,action) => {
            state.value = state.value.filter((ele,index) => index !== action.payload)
        },
        UpdateTask: (state,action) => {
            const { index,newTask } = action.payload
            state.value[index].task = newTask
        },
        Completed: (state,action) => {
            const index = action.payload;
            state.value[index].complete = true;
        }
    }

})

export const { AddTask,DeleteTask,DelOne,UpdateTask,Completed } = slice.actions

export const store = configureStore({
    reducer: {
        users: slice.reducer
    }
});
