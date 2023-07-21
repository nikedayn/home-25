import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksReducer';

const store = configureStore({
    reducer: {
        tasksPage: tasksReducer
    }
})

export default store