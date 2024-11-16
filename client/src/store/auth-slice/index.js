import { createSlice } from "@reduxjs/toolkit"; // Use ES module syntax

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Assuming you want to update the `user` state and set `isAuthenticated` to true
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        // You can add more reducers here, like `logout`, `setLoading`, etc.
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
