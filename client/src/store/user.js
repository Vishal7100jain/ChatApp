import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        conversation: [],
        getUserToAddFriend: [],
        isLoading: true,
        requestStatus: null,
        SelectedUserToChat: null,
        OnlineFriends: null
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify({ ...action.payload }));
            state.user = action.payload.user
        },
        setConversation: (state, action) => {
            state.conversation = action.payload
        },
        searchUsertoAddFriend: (state, action) => {
            state.isLoading = false
            state.getUserToAddFriend = action.payload
        },
        AcceptFriendReq: (state, action) => {
            let user = JSON.parse(localStorage.getItem('User'))
            user.user = { ...action.payload.user }
            localStorage.setItem("User", JSON.stringify(user));
            state.user = action.payload.user
        },
        StartChatWithUser: (state, action) => {
            state.SelectedUserToChat = action.payload
        },
        setOnlineFriends: (state, action) => {
            state.OnlineFriends = [...action.payload]
        }
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;