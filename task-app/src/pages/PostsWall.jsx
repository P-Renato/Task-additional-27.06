import { useState, useEffect } from "react";

function PostsWall() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users and posts in parallel
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    ])
      .then(([usersData, postsData]) => {
        setUsers(usersData);
        setPosts(postsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Posts Wall</h1>
      {users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        return (
          <div key={user.id} className="mb-6">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <ul className="list-disc ml-6">
              {userPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default PostsWall
