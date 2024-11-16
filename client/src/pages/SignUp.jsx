import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignUpActionFun } from '../action/user';
import { useNavigate } from 'react-router-dom'
import { HandleInputErrorSignUp } from '../hooks/userFormValidation';
import { useState } from 'react';


let OTPArray = []
for (let i = 0; i < 3; i++) {
    const number = Math.random();
    OTPArray.push(Math.round(number * 9000 + 1000))
}

const SignUp = () => {
    let [otpState] = useState(OTPArray)

    const navigation = useNavigate()
    let [Data, SetData] = useState({
        username: '', email: '', gender: ""
    })

    let [loadingbtn, setLoadingbtn] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (HandleInputErrorSignUp(Data)) {
            dispatch(SignUpActionFun(Data, navigation))
            setLoadingbtn(false)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full bg-opacity-0 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center'>
                    <span className='text-blue-400'>Chat App</span>
                </h1>
                <div className='divider'></div>
                <h1 className='text-3xl font-semibold text-center'>
                    Sign Up
                </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='grid items-center '>
                        <label className="input input-bordered flex items-center gap-2 m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input list='uniqe-username' value={Data.username} type="text" className="grow" onChange={(e) => SetData({ ...Data, username: e.target.value })} placeholder="Username" />
                            {!(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(Data.username[Data.username.length - 1])) &&
                                <datalist id='uniqe-username'>
                                    {otpState.map((OTP, i) => {
                                        return <option key={i} value={Data.username + "_" + OTP}></option>
                                    })}
                                </datalist>
                            }
                        </label>

                        <label className="input input-bordered flex items-center gap-2 p-0 m-3">
                            <select className="select select-bordered w-full" onChange={(e) => SetData({ ...Data, gender: e.target.value })}>
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </label>

                        <label className="input input-bordered flex items-center gap-2 m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type={'email'} className="grow" placeholder='Email' value={Data.email} onChange={(e) => SetData({ ...Data, email: e.target.value })} />
                        </label>
                    </div>
                    {loadingbtn ? (
                        <button className="btn btn-block btn-sm mt-2 btn-primary">
                            <span className="loading loading-spinner"></span>
                        </button>
                    ) : (
                        <button className='btn btn-block btn-sm mt-2 btn-primary'>Submit</button>
                    )}
                    <Link to={'/login'} className='link link-hover'>Don&apos;t have Account ? Login</Link>
                </form>
            </div >
        </div >
    )
}

export default SignUp
