import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    let [CheckPassword, setCheckPassword] = useState(true)

    let [showPassword, setShowPassword] = useState(false)
    let [showConfirmPassword, setShowConfirmPassword] = useState(false)

    let [loadingbtn, setLoadingbtn] = useState(false)

    let [password, setPassword] = useState('')
    let [confirmPassword, setconfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingbtn((pre) => pre = true)
    }

    const checkPasswordSame = (e) => {
        setconfirmPassword((pre) => pre = e.target.value)
        e.preventDefault()
        if (password === e.target.value) {
            setCheckPassword((pre) => pre = true)
        } else setCheckPassword((pre) => pre = false)
    }
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
                    <div>
                        <label className="input input-bordered flex items-center gap-2 m-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username" required />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 m-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type={showPassword ? "password" : 'text'} className="grow" required minLength='8' maxLength='15' placeholder='Password' value={password} onChange={(e) => setPassword((pre) => pre = e.target.value)} />
                            <div onClick={() => { setShowPassword((pre) => !pre) }} style={{ cursor: 'pointer' }}>
                                {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </div>
                        </label>

                        <label className="input input-bordered flex items-center gap-2 m-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            {CheckPassword ?
                                (<input type={showConfirmPassword ? 'password' : 'text'} required className="grow" minLength='8' maxLength='15' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => checkPasswordSame(e)} />) :
                                (<input type={showConfirmPassword ? 'password' : 'text'} required className="grow" minLength='8' maxLength='15' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => checkPasswordSame(e)} />)
                            }
                            <div onClick={() => { setShowConfirmPassword((pre) => !pre) }} style={{ cursor: 'pointer' }}>
                                {showConfirmPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </div>
                        </label>
                        {!CheckPassword && < h1 className='text-red-500 font-bold text-center p-0'>Password not match </h1>}
                    </div>
                    {loadingbtn ? (
                        <button className="btn btn-block btn-sm mt-2 btn-primary">
                            <span className="loading loading-spinner"></span>
                        </button>
                    ) : (
                        <button className='btn btn-block btn-sm mt-2 btn-primary'>Submit</button>
                    )}
                </form>
            </div >
        </div >
    )
}

export default Login
