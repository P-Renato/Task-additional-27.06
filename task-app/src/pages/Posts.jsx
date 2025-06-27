import React, { useEffect, useState } from 'react'

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
                <li>{post.title}</li>
            ))}
            
        </ul>
       </nav>
    </div>
  )
}

export default Posts
