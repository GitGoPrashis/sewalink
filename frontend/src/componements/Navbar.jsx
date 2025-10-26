import React from 'react'
import { assets } from '../assets/assets';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="sewalink logo" />
      <ul className='hidden md:flex item-start gap-7 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidder' />
        </NavLink>
         <NavLink to='/sprovider'>
            <li className='py-1'>Service-Provider</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidder' />
        </NavLink>
         <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidder' />
        </NavLink>
         <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidder' />
        </NavLink>
      </ul>
      <div >
        <button onClick={()=>navigate('/login')} className='bg-green-400 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar
