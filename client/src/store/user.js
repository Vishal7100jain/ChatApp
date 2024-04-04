import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        conversation: [],
        getUserToAddFriend: [],
        isLoading: true,
        requestStatus: null
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify({ ...action.payload }));
            state.user = action.payload.token
        },
        setConversation: (state, action) => {
            state.conversation = action.payload
        },
        searchUsertoAddFriend: (state, action) => {
            state.isLoading = false
            state.getUserToAddFriend = action.payload
        }
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;