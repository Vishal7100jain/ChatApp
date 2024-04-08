import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        Friends: [],
        getUserToAddFriend: [],
        isLoading: true,
        requestStatus: null,
        SelectedUserToChat: null,
        OnlineFriends: null,
        PhoneView: false
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify({ ...action.payload }));
            state.user = action.payload.user
        },
        Friends: (state, action) => {
            state.Friends = action.payload
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
            localStorage.setItem("SelectedUserToChat", JSON.stringify({ ...action.payload }));
            state.SelectedUserToChat = action.payload
        },
        setOnlineFriends: (state, action) => {
            state.OnlineFriends = [...action.payload]
        },
        SetPhoneView: (state, action) => {
            state.PhoneView = action.payload
        },
        SetRefreshUser: (state, action) => {
            let user = JSON.parse(localStorage.getItem('User'))
            user.user = { ...action.payload }
            localStorage.setItem("User", JSON.stringify(user));
            state.user = action.payload
        }
    },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;