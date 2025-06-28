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
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Post
