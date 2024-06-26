import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetUserToAddFriend } from '../../action/user';
import SiderProfile from './siderProfile.jsx';

const SearchInput = () => {
    const dispatch = useDispatch()
    const username = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(GetUserToAddFriend(username.current.value))
    }

    return <>
        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center gap-2 xs:w-full' >
            <label className="input input-bordered flex items-center gap-2 xs:w-full">
                <input type="text" className="grow sm:w-full" placeholder="Search" ref={username} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <label htmlFor='my-drawer' className="btn btn-circle swap swap-rotate">
                <input type="checkbox" />
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
        </form>
        <SiderProfile></SiderProfile>
    </>
}

export default SearchInput
