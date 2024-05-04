import {createStore} from 'redux'


// const counterSlice = createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         increment(state){
//             state.counter ++;
//         } 
//         decrement(state){
//             state.counter ++;
//         } 
//         inc5(state){state.counter + 5} 

//         togglecounter(state,action){
//             state.counter=state.counter + action.amount;
//         }
//     }
// })


const counterReducer = (state={counter:0,show:true},action) => {
    if(action.type=='increment'){
        return {
            counter :state.counter+1,
            show : state.show
        }
    }
    if (action.type == "decrement"){
        return {
            counter : state.counter-1,
            show : state.show
        }
    }
    if (action.type == "inc5"){
        return {
            counter : state.counter+5 ,
            show :      state.show
        }
    }
    if (action.type == "toggle"){
        return {
            counter : state.counter+5 ,
            show : !state.show
        }
    }
    return state

}

const store = createStore(counterReducer);
export default store;