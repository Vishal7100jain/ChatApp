import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('User'))?.user

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={user ? < Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} />} />
        <Route path='/SignUp' element={!user ? <SignUp /> : <Navigate to={'/'} />} />
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
