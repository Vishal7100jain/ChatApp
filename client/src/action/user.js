import * as api from '../api/index.js'
import { UserAction } from '../store/user'

const WithErrorHandling = async (dispatch, actionFunction, actionCreator) => {
    try {
        const data = await actionFunction()
        console.log(data)
        dispatch(actionCreator(data))
    } catch (error) {
        console.log(error)
    }
}

export const SignUpActionFun = (data) => async (dispatch) => {
    await WithErrorHandling(dispatch, async () => await api.SignUp(data), UserAction.setUser)
}