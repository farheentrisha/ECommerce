import { configureStore } from "@reduxjs/toolkit"; // Use ES module syntax
import authReducer from './auth-slice';

const store = configureStore({
    reducer: {
        auth: authReducer, // Use a comma instead of a semicolon
    },
});

export default store;
