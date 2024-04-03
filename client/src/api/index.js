import axios from 'axios'

const url = 'http://localhost:9000/api/auth'

export const SignUp = async (data) => axios.post(url + "/signUp", data)
export const Login = async (data) => axios.post(url + '/login', data)