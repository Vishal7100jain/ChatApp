import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        Messages: [],
        MessageSendedBy: []
    },
    reducers: {
        Messages: (state, action) => {
            state.Messages = [...state.Messages, ...action.payload]
        }
    }
})

export const MessageAction = messageSlice.actions;
export default messageSlice.reducer;