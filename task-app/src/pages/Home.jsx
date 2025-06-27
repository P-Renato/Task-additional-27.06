import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  
  return (
    <div className='flex w-full h-screen justify-center items-center flex-col'>
      <h1>Welcome to Home Page</h1>
      <h3>Go to our Users Page</h3>
      <NavLink className='p-2 bg-fuchsia-400' to="users">Users</NavLink>
    </div>
  )
}

export default Home
