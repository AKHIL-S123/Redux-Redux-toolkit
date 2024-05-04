import { createSlice } from '@reduxjs/toolkit';

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
// export default counterSlice;
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;