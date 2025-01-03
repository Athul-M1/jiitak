import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const { value } = e.target;
    if (!!value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      setIsEmailValid(true);
      setEmail(value);
    } else {
      setIsEmailValid(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter an email address.'); // Show error toast if email is empty
      return
    }

    if (!isEmailValid) {
      toast.error('Please enter a valid email address.'); // Show error toast if email is invalid
      return
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success('Email sent to the specified address for resetting your password')
      // Delay navigation to allow the toast to display
      setTimeout(() => {
        navigate('/reset-password');
      }, 1500); 
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F5F0]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#F8F5F0]">
        <h2 className="text-4xl text-center text-gray-800">Reset Password</h2>
        <h6 className="text-center">
          Please enter the email address you are currently using. We are sending a URL for resetting your password via email.
        </h6>
        <form onSubmit={handleSubmit}>
          {/* Email section */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] ${!isEmailValid ? 'border-red-500 focus:ring-2' : 'border-gray-300'}`}
              placeholder="Enter your email"
            />
            {!isEmailValid && <p className="text-sm text-red-500">Please enter a valid email address.</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`relative w-full px-4 py-2 mt-4 text-white rounded-lg ${isLoading ? "bg-[#FF9500] cursor-not-allowed" : "bg-[#FF9500] hover:bg-[#ff9500df]"}`}
          >
            <div className="flex items-center justify-center">
              {isLoading ? (
                <span className="loader w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
              ) : (
                'Submit'
              )}
            </div>
          </button>
          <div className="w-full text-center mt-2">
            <Link to={'/'}><p>Back to login page</p></Link>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} /> 
    </div>
  );
};

export default ForgotPassword;
