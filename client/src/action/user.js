import * as api from '../api/index.js'
import { MessageAction } from '../store/message.js'
import { UserAction } from '../store/user'
import toast from 'react-hot-toast'

const WithErrorHandling = async (dispatch, actionFunction, actionCreator) => {
    try {
        const { data } = await actionFunction()
        if (data.Successmessage) toast.success(data.Successmessage)
        await dispatch(actionCreator(data))
    } catch (error) {
        if (error.response.data.message) return toast.error(error.response.data.message)
    }
}

export const GetUserInfoToStoreInRedux = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.GetMyData(id), UserAction.SetRefreshUser)

}

export const SignUpActionFun = (data, navigate) => async (dispatch) => {
    try {
        await WithErrorHandling(dispatch, async () => await api.SignUp(data), UserAction.setUser)
        navigate('/signup')
    } catch (error) {
        navigate('/signup')
    }
}

export const LoginActionFun = (data, navigate) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.Login(data), UserAction.setUser)
    navigate('/')
}

export const GetFriends = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.Conversation(id), UserAction.Friends)
}

export const GetUserToAddFriend = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.GetUserWithId(id), UserAction.searchUsertoAddFriend)
}

export const SendFriendReqActionFun = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SendFriendReq(id))
}

export const AcceptFriendReqActionFun = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.AcceptFriendReq(id), UserAction.AcceptFriendReq)
}

export const RejectFriendReqActionFun = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.RejectFriendReq(id), UserAction.AcceptFriendReq)
}

export const SendMessageActionFun = (data, id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SendMessage(data, id), MessageAction.GetMessageFromDb)
}

export const GetMessages = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.GetMessages(id), MessageAction.Messages)
}

export const SetEmojiOnMessageActionFun = (id, emoji) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SetEmojiOnMessage(id, emoji))
}