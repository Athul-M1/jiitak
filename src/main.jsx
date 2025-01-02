import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import Loginprovider from './Context/ContextLogin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Loginprovider>
        <App />
</Loginprovider>

    </BrowserRouter>
  </StrictMode>,
)
