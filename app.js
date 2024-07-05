//inital state
//createslice 
//configrestore....

  const {createSlice, configureStore} = require('@reduxjs/toolkit')

const initialState = {
    counter:0
}


const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter += 1;
        },
        decrement:(state)=>{
            state.counter -= 1;
        },
        increaseBy:(state, action)=>{
            state.counter += action.payload
        },
        reset:(state)=>{
            state.counter = 0
        }
    }
});

//generate the action....
const {increment,decrement, increaseBy, reset} = counterSlice.actions;

//genereate reducer....

const counterReducer = counterSlice.reducer;


const store = configureStore({
    reducer:counterReducer
})


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement())

store.dispatch(increaseBy(200))

store.dispatch(reset());
console.log(store.getState());
