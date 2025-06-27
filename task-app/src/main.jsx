import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'
import About from './pages/About.jsx'
import Users from './pages/Users.jsx'
import User from './pages/User.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "users",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: ":uid",
            element: <User />
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
