import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify({ ...action.payload }));
            state = action.payload
            return state
        },
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;