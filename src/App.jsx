import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import ResetPassword from './Components/ResetPassword'
import UserDetails from './Components/UserDetails'
import Register from './Components/Register'
import AdminDashboard from './Components/AdminDashboard'
import ForgotPassword from './Components/ForgotPassword'
import Settings from './Components/Settings'
import Winners from './Components/Winners'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Login/>} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/admin/user-details' element={<UserDetails/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/> 
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/admin/settings' element={<Settings/>}/>
        <Route path='//admin/winners' element={<Winners/>}/>
      </Routes>
    </>
  )
}

export default App
