
import { createSlice,configureStore } from '@reduxjs/toolkit';
const initialState= {counter:0,show:true}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        } ,
        decrement(state){
            state.counter--;
        },
        inc5(state,action){
            state.counter += action.payload;
        },
        togglecounter(state){
            state.show=!state.show
        }
    }
})

const store = configureStore({
    reducer : counterSlice.reducer
});
export default store;
export const counterActions = counterSlice.actions;
