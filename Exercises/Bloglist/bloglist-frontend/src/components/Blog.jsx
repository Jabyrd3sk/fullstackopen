import { useState } from 'react'

const Blog = ({ blog, onLike, onDelete, currentUser }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleVisible = () => setVisible(!visible)

  // check if current user is the creator
  const userIsCreator = blog.user && currentUser && (
    (blog.user.username && currentUser.username && blog.user.username === currentUser.username) ||
    (blog.user.toString && currentUser.id && blog.user.toString() === currentUser.id.toString())
  )

  return (
    <div  style={blogStyle} className="blog">
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleVisible}>{visible ? 'hide' : 'view'}</button>
      </div>

      {visible &&
        <div className="blogDetails">
          <div><a href={blog.url}>{blog.url}</a></div>
          <div>
            likes {blog.likes}
            <button onClick={() => onLike(blog)}>like</button>
          </div>
          <div>{blog.user && (blog.user.name || blog.user.username)}</div>
          {userIsCreator && (
            <div>
              <button onClick={() => onDelete(blog)}>remove</button>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Blog