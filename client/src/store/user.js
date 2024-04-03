import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        conversation: []
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify({ ...action.payload }));
            return state.user = JSON.parse(action.payload.token)
        },
        setConversation: (state, action) => {
            return state.conversation = action.payload
        }
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;