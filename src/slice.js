import { createSlice } from "@reduxjs/toolkit";

const watchsystem = createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        addwatches(state,action){
            state.push(action.payload)
        },
        removewatches(state,action){
            const watchremove = action.payload
            return state.filter((array) => array.id !==watchremove)
        }
    }
});
export const{addwatches , removewatches} = watchsystem.actions;
export default watchsystem.reducer