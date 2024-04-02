import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
        },
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;