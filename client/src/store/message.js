import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        Messages: [],
        MessageEmoji: {}
    },
    reducers: {
        Messages: (state, action) => {
            state.Messages = action.payload
        },
        LiveMessageStore: (state, action) => {
            if (action.payload[0].senderId === JSON.parse(localStorage.getItem('SelectedUserToChat'))._id) {
                state.Messages = [...state.Messages, ...action.payload]
            }
        },
        GetMessageFromDb: (state, action) => {
            state.Messages = [...state.Messages, ...action.payload]
        },
        SetEmojiOnMessageLive: (state, action) => {
            state.Messages = state.Messages.map((msg) => {
                if (msg._id === action.payload._id) {
                    return msg = action.payload
                }
                return msg
            })
        }
    }
})

export const MessageAction = messageSlice.actions;
export default messageSlice.reducer;