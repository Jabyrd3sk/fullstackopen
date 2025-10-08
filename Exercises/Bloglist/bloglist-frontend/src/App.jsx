import { useState, useEffect, useRef } from 'react'
import loginService from './services/login'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const LOCAL_STORAGE_KEY = 'loggedBlogAppUser'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(initial => setBlogs(initial))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const showMessage = (text, error = false, timeout = 3000) => {
    setMessage(text)
    setIsError(error)
    setTimeout(() => {
      setMessage(null)
      setIsError(false)
    }, timeout)
  }

  const handleLogin = async credentials => {
    try {
      const user = await loginService.login(credentials)
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
      showMessage(`Welcome ${user.name}`, false) // success
    } catch (e) {
      showMessage('wrong credentials', true) // error
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY)
    setUser(null)
    blogService.setToken(null)
    showMessage(`${user.name} successfully logged out`, false)
  }

  // create new blog, hide afterwards
  const createBlog = async (blogObject) => {
    try {
      const returned = await blogService.create(blogObject)
      setBlogs(prev => prev.concat(returned))
      showMessage(`a new blog "${returned.title}" by ${returned.author} added`, false)
      blogFormRef.current.toggleVisibility()
    } catch (err) {
      showMessage('error creating blog', true)
    }
  }

  // handle like: send full payload; backend returns updated blog (may not be populated)
  const handleLike = async (blog) => {
    try {
      // extract user id for payload
      const userId = blog.user && (blog.user.id || blog.user._id || blog.user)
      const payload = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1,
        user: userId
      }

      const returned = await blogService.update(blog.id, payload)

      // returned might not include populated user, so keep the original blog.user
      const returnedWithUser = returned.user ? returned : { ...returned, user: blog.user }

      setBlogs(prev => prev.map(b => b.id !== blog.id ? b : returnedWithUser))
    } catch (err) {
      showMessage('error updating likes', true)
    }
  }

  const handleDelete = async (blog) => {
    if (!window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) return
    try {
      await blogService.remove(blog.id)
      setBlogs(prev => prev.filter(b => b.id !== blog.id))
      showMessage('blog removed', false)
    } catch (err) {
      showMessage('error removing blog', true)
    }
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={message} isError={isError} />
        <LoginForm handleLogin={handleLogin}/>
      </div>
    )
  }

  // sort blogs by likes descending
  const sorted = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} isError={isError} />
      <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>

      <Togglable buttonLabel='create new' ref={blogFormRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>


      {sorted.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          onLike={handleLike}
          onDelete={handleDelete}
          currentUser={user}
        />
      )}
    </div>
  )
}

export default App
