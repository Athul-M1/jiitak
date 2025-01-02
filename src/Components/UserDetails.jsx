import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const UserDetails = () => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState([])

    // Function for API call to get all users
    const getUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(response)
            // Storing the data to setUsers and setFilter states
            setUsers(response.data)
            setFilter(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    // Search function
    const handleSearch = (e) => {
        const searchKey = e.target.value
        if (searchKey) {
            // Filtering users based on their name or email
            const filteredUser = users.filter((user) =>
                user.name.toLowerCase().includes(searchKey.toLowerCase()) ||
                user.email.toLowerCase().includes(searchKey.toLowerCase())
            )
            // Stores the data to setFilter
            setFilter(filteredUser)
        } else {
            // Reset filter
            setFilter(users)
        }
    }
    return (
        <div className="grid grid-cols-12 grid-rows-1">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="bg-[#F8F5F0] col-span-10">
          <div className="container mx-auto px-4 sm:px-9 w-full flex flex-col sm:flex-row sm:justify-between items-center py-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-0 text-center sm:text-left">
              Registered Users
            </h2>
            <div className="relative w-full sm:w-1/5">
              {/* Search Icon */}
              <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400">
                <i className="fas fa-search text-[#878480]"></i>
              </span>
              <input
                type="text"
                onChange={handleSearch}
                className="w-full pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="table-body">
            <div className="overflow-x-auto px-4 sm:px-9">
              <table className="w-full min-w-full table-auto border-collapse rounded-md bg-white">
                <thead className="text-[#878480]">
                  <tr>
                    <th className="text-left px-5 py-2 border-b">id</th>
                    <th className="text-left px-5 py-2 border-b">Name</th>
                    <th className="text-left px-5 py-2 border-b">Email</th>
                    <th className="text-left px-5 py-2 border-b">Phone</th>
                    <th className="text-left px-5 py-2 border-b">City</th>
                  </tr>
                </thead>
                {filter.length > 0 ? 
                  <tbody>
                    {filter.map((user) => (
                      <tr key={user.id} className="text-left">
                        <td className="px-4 py-2">{user.id}.</td>
                        <td className="px-4 py-2" title={user.name}>
                          {/* tooltip */}
                          <div className="truncate w-32">{user.name}</div>
                        </td>
                        <td className="px-4 py-2" title={user.email}>
                          <div className="truncate w-32">{user.email}</div>
                        </td>
                        <td className="px-4 py-2" title={user.phone}>
                          <div className="truncate w-32">{user.phone}</div>
                        </td>
                        <td className="px-4 py-2" title={user.address.city}>
                          <div className="truncate w-32">{user.address.city}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                 : 
                  <div className="h-60 w-full flex justify-center items-center text-[#878480]">
                    <p>There are no registered users</p>
                  </div>
                }
              </table>
            </div>
          </div>
        </div>
      </div>
      
    )
}
export default UserDetails