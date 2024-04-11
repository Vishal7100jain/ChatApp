import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MessageContainer from './component/messages/MessageContainer.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { UserAction } from './store/user'

function App() {

  const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('User'))?.user
  console.log(user)
  const dispatch = useDispatch()

  const handleResize = () => {
    dispatch(UserAction.SetPhoneView(window.innerWidth < 750));
  };

  // Add event listener for window resize
  window.addEventListener('DOMContentLoaded', handleResize);


  return (
    <div style={{ overflow: "scroll" }} className='p-4 xs:p-0 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={user ? < Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} />} />
        <Route path='/SignUp' element={!user ? <SignUp /> : <Navigate to={'/'} />} />
        <Route path='/Conversation' element={<MessageContainer IamPhoneView={true} />} />
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
