import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginContext } from '../Context/ContextLogin'

const Navbar = () => {
    const { loginResopnse } = useContext(loginContext)
    const [email, setEmail] = useState('')
    useEffect(() => {
        setEmail(sessionStorage.getItem('email'))
    }, [loginResopnse])
    return (
        <>
            <div className='w-full flex justify-between mb-2' >
                <h1 className=' px-2 text-3xl font-bold text-[#FF9500] '>JIITAK</h1>
                {
                    !email &&
                    <Link to={'/signup'}><button className='px-2 text-2xl font-medium text-[#FF9500] '>signup</button></Link>
                }
                {email &&
                    <i class="fa-regular fa-user text-2xl px-2"></i>
                }
            </div>
        </>
    )
}
export default Navbar