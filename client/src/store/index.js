import { configureStore } from '@reduxjs/toolkit';
import userReducre from './user';
import messageReducer from './message';

const store = configureStore({
    reducer: {
        user: userReducre,
        message: messageReducer
    }
})

export default store;