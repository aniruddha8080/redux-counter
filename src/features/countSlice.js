import{createSlice} from '@reduxjs/toolkit';
const countSlice = createSlice({
name:"counter",
initialState: 0,
reducers :{
    increment : (state,action)=> state + 1 ,
    decrement : (state,action)=> state - 1 ,
    reset:()=> 0 ,
}
})
export const {increment,decrement,reset} = countSlice.actions;
export default countSlice.reducer;