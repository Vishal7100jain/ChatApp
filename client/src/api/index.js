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
export const Conversation = async (id) => API.get('/user/users/')

export const SendFriendReq = async (id) => API.post(`/friend/Request/${id}`)