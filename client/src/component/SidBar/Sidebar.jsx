import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

const Sidebar = () => {
    return (
        <div className='md:w-6/12 xs:w-screen p-4 flex flex-col'>
            <SearchInput></SearchInput>
            <div className='divider m-0'></div>
            <Conversations></Conversations>
        </div>
    )
}

export default Sidebar
