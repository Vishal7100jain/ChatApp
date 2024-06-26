import axios from 'axios'

const API = axios.create({
    baseURL: 'https://chatapp-k0b4.onrender.com/api'
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('User')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`
        return req
    }
    return req
})


// User Routes
export const GetMyData = async (id) => API.get(`/user/MyData/${id}`)

// Auth Routes
export const SignUp = async (data) => API.post("/auth/signUp", data)
export const Login = async (data) => API.post('/auth/login', data)

// Search Routes
export const GetUserWithId = (id) => API.get(`/user/UserSearch/${id}`)

// FriendReq Routes
export const SendFriendReq = async (id) => API.post(`/friend/Request/${id}`)
export const AcceptFriendReq = async (id) => API.post(`/friend/Accept/${id}`)
export const RejectFriendReq = async (id) => API.post(`/friend/Reject/${id}`)

// Message Routes
export const Conversation = async (id) => API.get(`/friend/Conversations/${id}`)
export const SendMessage = async (data, id) => API.post(`/message/SendMessage/${id}`, data)
export const GetMessages = async (id) => API.get(`/message/GetMessages/${id}`)
export const SetEmojiOnMessage = async (id, emoji) => API.patch(`message/Emoji/${id}`, emoji)