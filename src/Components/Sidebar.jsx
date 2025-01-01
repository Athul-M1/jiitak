import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="w-64 bg-white shadow-md h-screen ">
        <ul className="space-y-4">
          <li className='w-full py-6  text-[#878480] font-medium flex items-center hover:bg-orange-200'>
            <i class="fa-solid fa-table-columns mr-2"></i> DashBoard
          </li>
          <li className="w-full py-6  text-[#878480] font-medium flex items-center hover:bg-orange-200">
            <i className="fas fa-home mr-2"></i> Home
          </li>
          <li className=" w-full py-6  text-[#878480] font-medium flex items-center hover:bg-orange-200">
            <i className="fas fa-users mr-2"></i> Registerd Users
          </li>
          <li className="w-full py-6  text-[#878480] font-medium flex items-center hover:bg-orange-200">
            <i className="fas fa-gift mr-2"></i> Winners
          </li>
          <li className="w-full py-6  text-[#878480] font-medium flex items-center hover:bg-orange-200">
            <i className="fas fa-cog mr-2"></i> Settings
          </li>


        </ul>
      </div>
    </>
  )
}

export default Sidebar