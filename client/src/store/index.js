import { configureStore } from '@reduxjs/toolkit';
import userReducre from './user';

const store = configureStore({
    reducer: {
        user: userReducre
    }
})

export default store;