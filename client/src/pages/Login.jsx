import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginActionFun } from '../action/user';
import { HandleInputErrorLogin } from '../hooks/userFormValidation.js';
import { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button'
import useGoogleAuth from '../hooks/googleAuth.js';

const Login = () => {
    const { userData, handleGoogleLogin } = useGoogleAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [Data, SetData] = useState({ username: '', email: '' })
    let [loadingbtn, setLoadingbtn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (HandleInputErrorLogin(Data)) {
            dispatch(LoginActionFun(Data, navigate))
            setLoadingbtn((pre) => !pre)
        }
    }

    useEffect(() => {
        if (userData) {
            dispatch(LoginActionFun({ username: userData.name, email: userData.email }, navigate))
            setLoadingbtn((pre) => !pre)
        }
    }, [userData])

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full bg-opacity-0 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center'>
                    <span className='text-blue-400'>Chat App</span>
                </h1>
                <div className='divider'></div>
                <h1 className='text-3xl font-semibold text-center'>
                    Login
                </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username" value={Data.username} onChange={(e) => (SetData({ ...Data, username: e.target.value }))} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M12 13.3L2 6V5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v1l-10 7.3z" />
                            <path d="M12 15.6L2 8v10c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V8l-10 7.6z" />
                        </svg>
                        <input type={"email"} className="grow" placeholder='Email' value={Data.email} onChange={(e) => SetData({ ...Data, email: e.target.value })} />
                    </label>
                    {loadingbtn ? (
                        <button type='submit' className="btn btn-block btn-sm mt-2 btn-primary">
                            <span className="loading loading-spinner"></span>
                        </button>
                    ) : (
                        <button type='submit' className='btn btn-block btn-sm mt-2 btn-primary'>Submit</button>
                    )}
                    <Link to={'/SignUp'} className='link link-hover'>Don&apos;t have Account ? Sign Up</Link>
                </form>
                <div className='justify-center flex mt-4'>
                    <GoogleButton onClick={() => handleGoogleLogin()} />
                </div>
            </div >
        </div >
    )
}

export default Login
