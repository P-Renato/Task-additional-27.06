import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            console.log(posts)
    }, [])
    

  return (
    <div>

       <h1>Posts</h1>

       <nav>
        <ul>
            {posts.map(post => ( 
                <li className='m-8'>
                    <NavLink className='p-2 bg-fuchsia-400 m-2' key={post.id} to={`/posts/${post.id}`}>{post.title}</NavLink></li>
            ))}
            
        </ul>
       </nav>
    </div>
  )
}

export default Posts
