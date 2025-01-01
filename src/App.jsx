import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import ResetPassword from './Components/ResetPassword'
import UserDetails from './Components/UserDetails'
import Register from './Components/Register'
import AdminDashboard from './Components/AdminDashboard'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path= '/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/admin/user-details' element={<UserDetails/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/> 
      </Routes>
    </>
  )
}

export default App
