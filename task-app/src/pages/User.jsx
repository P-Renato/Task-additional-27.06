import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const [user, setUser] = useState();
    const {uid} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
      .then(response => response.json())
      .then(data => setUser(data))
      console.log(user)
    }, [])
  return (
    <div>
        {user ? (
            <section>
                <h3>{user.username}</h3>
                <h5>{user.address.city}</h5>
            </section>
        ) : (
            <p className='flex justify-center items-center w-full h-screen'>Loading...</p>
        )}
      
    </div>
  )
}

export default User
