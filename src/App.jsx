import './App.css'
// import AdminDashboard from './Components/AdminDashboard'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import ResetPassword from './Components/ResetPassword'
import UserDetails from './Components/UserDetails'

function App() {
  return (
    <>
      <Navbar/>

      <Login/>
      <ResetPassword/>
      <UserDetails/>
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
