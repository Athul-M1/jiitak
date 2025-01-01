import React, { useState } from 'react'

const Register = () => {
      const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F5F0]">
    <div className="w-full max-w-md p-8 space-y-4 bg-[#F8F5F0]">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      <form>
        {/* email section */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent" placeholder="Enter your email"
          />
        </div>
        {/* password section */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center px-4  border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#FF9500] focus-within:border-transparent bg-white">
            <input type={isVisible ? "text" : "password"} className="flex-grow bg-transparent focus:outline-none placeholder-gray-500" id="password" placeholder="Enter your password"
            />
            <button type="button" className="p-2 focus:outline-none" onClick={() => setIsVisible(!isVisible)} aria-label={isVisible ? "Hide password" : "Show password"}>
              {/* conditional rendering for displaying eye icon or eye-slash icon */}
              {isVisible ? 
                <i className="fa-solid fa-eye"></i>
               : 
                <i className="fa-solid fa-eye-slash"></i>
              }
            </button>
          </div>
        </div>
        {/* Submit Button */}
        <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-[#FF9500] rounded-lg hover:bg-[#ff9500df]" >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}
export default Register