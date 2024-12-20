import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MessageContainer from './component/messages/MessageContainer.jsx'
import { useDispatch } from 'react-redux'
import { UserAction } from './store/user'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('User'))?.user
  const dispatch = useDispatch()

  const handleResize = () => {
    dispatch(UserAction.SetPhoneView(window.innerWidth < 750));
  };
  handleResize()

  return (
    <div style={{ overflow: "scroll" }} className='md:p-4 xs:p-0 h-screen flex items-center justify-center'>
      <GoogleOAuthProvider clientId="919677217472-ambs64g0qhbj603f7nbb7g3b0be829dr.apps.googleusercontent.com">
        <Routes>
          <Route path='/' element={user ? < Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} />} />
          <Route path='/signup' element={!user ? <SignUp /> : <Navigate to={'/'} />} />
          <Route path='/Conversation' element={<MessageContainer IamPhoneView={true} />} />
        </Routes>
      </GoogleOAuthProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
