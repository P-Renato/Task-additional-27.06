import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <NavLink to="posts-wall" className='p-2 bg-fuchsia-400 m-2'>Go to Posts Wall</NavLink>
    </div>
  )
}

export default About
