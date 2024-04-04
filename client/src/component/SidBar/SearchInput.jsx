import { Input } from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserToAddFriend } from '../../action/user';

const SearchInput = () => {
    const dispatch = useDispatch()
    const username = useRef('')
    const { isloading } = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(GetUserToAddFriend(username.current.value))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center gap-2'>
            <input type="text" ref={username} placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                {isloading ? <span className="loading loading-ring loading-lg"></span> :
                    <FaSearch className="w-6 h-6 outline-none"></FaSearch>
                }
            </button>
        </form>
    )
}

export default SearchInput
