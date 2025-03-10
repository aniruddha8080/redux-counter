import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../features/countSlice'
import todolistSlice from '../features/todoSlice'
const store = configureStore({
    reducer: {
        count : countReducer,
        todo : todolistSlice
    }
})

export default store;