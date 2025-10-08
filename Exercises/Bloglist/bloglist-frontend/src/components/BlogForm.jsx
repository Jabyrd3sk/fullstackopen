import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    createBlog({ title, author, url })
    setTitle(''); setAuthor(''); setUrl('')
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title: &nbsp;</label>
          <input
            id="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder='enter title' />
        </div>
        <div>
          <label htmlFor="author">author: &nbsp;</label>
          <input
            id="author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
            placeholder='enter author ' />
        </div>
        <div>
          <label htmlFor="url">url: &nbsp;</label>
          <input
            id="url"
            value={url}
            onChange={({ target }) => setUrl(target.value)} 
            placeholder='enter url' />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm
