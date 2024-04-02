import axios from 'axios'
const url = 'http://localhost:9000/api/auth'

export const SignUp = (data) => {
    axios.post(url + "/signUp", data)
}