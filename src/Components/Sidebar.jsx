import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
import { loginContext } from '../Context/ContextLogin';

const Sidebar = () => {
  const { setLoginResponse } = useContext(loginContext);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Set the active link based on the current path
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    setLoginResponse('');
    toast.success('Successfully logged out!', { position: 'bottom-center', autoClose: 2000 }); // Show success message
    setTimeout(() => {
      navigate('/');
    }, 3000); // Navigate after toast duration
  };

  return (
    <>
      {/* Toast container to display messages */}
      <ToastContainer />

      <div className="w-12 sm:w-52 bg-white shadow-md h-screen">
        <ul className="space-y-4">
          <Link to={'/admin/dashboard'}>
            <li
              className={`group w-full py-6 font-medium flex items-center ${
                activeLink === '/admin/dashboard'
                  ? 'bg-orange-200 text-orange-500'
                  : 'text-[#878480] hover:bg-orange-200'
              }`}
              onClick={() => handleClick('/admin/dashboard')}
            >
              <i
                className={`fa-solid fa-table-columns mr-2 px-2 ${
                  activeLink === '/admin/dashboard' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              ></i>
              <span
                className={`hidden md:inline ${
                  activeLink === '/admin/dashboard' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              >
                Dashboard
              </span>
            </li>
          </Link>

          <Link to={'/admin/user-details'}>
            <li
              className={`group w-full py-6 font-medium flex items-center ${
                activeLink === '/admin/user-details'
                  ? 'bg-orange-200 text-orange-500'
                  : 'text-[#878480] hover:bg-orange-200'
              }`}
              onClick={() => handleClick('/admin/user-details')}
            >
              <i
                className={`fas fa-users mr-2 px-2 ${
                  activeLink === '/admin/user-details' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              ></i>
              <span
                className={`hidden md:inline ${
                  activeLink === '/admin/user-details' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              >
                Registered Users
              </span>
            </li>
          </Link>

          <Link to={'/admin/winners'}>
            <li
              className={`group w-full py-6 font-medium flex items-center ${
                activeLink === '/admin/winners'
                  ? 'bg-orange-200 text-orange-500'
                  : 'text-[#878480] hover:bg-orange-200'
              }`}
              onClick={() => handleClick('/admin/winners')}
            >
              <i
                className={`fas fa-gift mr-2 px-2 ${
                  activeLink === '/admin/winners' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              ></i>
              <span
                className={`hidden md:inline ${
                  activeLink === '/admin/winners' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              >
                Winners
              </span>
            </li>
          </Link>

          <Link to={'/admin/settings'}>
            <li
              className={`group w-full py-6 font-medium flex items-center ${
                activeLink === '/admin/settings'
                  ? 'bg-orange-200 text-orange-500'
                  : 'text-[#878480] hover:bg-orange-200'
              }`}
              onClick={() => handleClick('/admin/settings')}
            >
              <i
                className={`fas fa-cog mr-2 px-2 ${
                  activeLink === '/admin/settings' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              ></i>
              <span
                className={`hidden md:inline ${
                  activeLink === '/admin/settings' ? 'text-orange-500' : 'group-hover:text-orange-500'
                }`}
              >
                Settings
              </span>
            </li>
          </Link>

          {/* Logout */}
          <li
            className={`group w-full py-6 font-medium flex items-center text-[#878480] hover:bg-orange-200`}
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket mr-2 px-2 group-hover:text-orange-500"></i>
            <span className="hidden md:inline group-hover:text-orange-500">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
