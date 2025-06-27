import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className=' bg-emerald-400 text-blue-800'>
        <ul className='flex w-full justify-around h-20 items-center '>
            <li className='p-2 bg-fuchsia-400'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='p-2 bg-fuchsia-400'>
                <NavLink to="posts">Posts</NavLink>
            </li>
            <li className='p-2 bg-fuchsia-400'>
                <NavLink to="about">About</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
