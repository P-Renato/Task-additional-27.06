import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      console.log(users)
    }, [])
    
  return (
    <div className='flex flex-row h-screen justify-around items-center'>
      <h1>Welcome to Users Page</h1>
      <nav>
        <ul className='flex flex-col h-screen justify-around items-center' >
            {users.map(user => (
            <li className='p-2 bg-fuchsia-400'>
                <NavLink key={user.id} to={`/users/${user.id}`}>{user.name}</NavLink>            
            </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default Users
