import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState();
    const {pid} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
      .then(response => response.json())
      .then(data => setPost(data))
      console.log(post)
    }, [])

  return (
    <div>
      { post ? (
        <section>
            <h3 className='p-3'>{post.title}</h3>
            <p className='m-4 bg-teal-400 p-10'>{post.body}</p>
        </section>
      ) : (
        <p className='flex justify-center items-center h-screen w-full'>Loading...</p>
      )}
    </div>
  )
}

export default Post
