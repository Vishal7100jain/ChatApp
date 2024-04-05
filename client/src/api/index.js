import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:9000/api'
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('User')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`
        return req
    }
    return req
})

export const SignUp = async (data) => API.post("/auth/signUp", data)
export const Login = async (data) => API.post('/auth/login', data)

export const GetUserWithId = (id) => API.get(`/user/UserSearch/${id}`)

export const Conversation = async (id) => API.get(`/friend/Conversations/${id}`)
export const SendFriendReq = async (id) => API.post(`/friend/Request/${id}`)
export const AcceptFriendReq = async (id) => API.post(`/friend/Accept/${id}`)
export const RejectFriendReq = async (id) => API.post(`/friend/Reject/${id}`)