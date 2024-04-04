import * as api from '../api/index.js'
import { UserAction } from '../store/user'
import toast from 'react-hot-toast'

const WithErrorHandling = async (dispatch, actionFunction, actionCreator) => {
    try {
        const { data } = await actionFunction()
        if (!data.message) toast.success("Success")
        await dispatch(actionCreator(data))
    } catch (error) {
        if (error.response.data.message) return toast.error(error.response.data.message)
    }
}

export const SignUpActionFun = (data, navigate) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SignUp(data), UserAction.setUser)
    navigate('/')
}

export const LoginActionFun = (data, navigate) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.Login(data), UserAction.setUser)
    navigate('/')
}

export const GetConversations = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.Conversation(id), UserAction.setConversation)
}

export const GetUserToAddFriend = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.GetUserWithId(id), UserAction.searchUsertoAddFriend)
}

export const SendFriendReqActionFun = (id) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SendFriendReq(id))
}