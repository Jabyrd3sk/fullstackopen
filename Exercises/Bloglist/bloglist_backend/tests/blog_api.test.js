// const mongoose = require('mongoose')
// const supertest = require('supertest')
// const app = require('../app')
// const Blog = require('../models/blog')
// const config = require('../utils/config')

// const api = supertest(app)

// const initialBlogs = [
//   { title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7 },
//   { title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf', likes: 5 }
// ]

// beforeAll(async () => {
//   // connect to the test DB (config picks TEST_MONGODB_URI when NODE_ENV=test)
//   await mongoose.connect(config.MONGODB_URI)
// })

// beforeEach(async () => {
//   await Blog.deleteMany({})
//   await Blog.insertMany(initialBlogs)
// })

// test('blogs are returned as json', async () => {
//   await api
//     .get('/api/blogs')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })

// test('all blogs are returned', async () => {
//   const response = await api.get('/api/blogs')
//   expect(response.body).toHaveLength(initialBlogs.length)
// })

// test('unique identifier property is named id', async () => {
//   const response = await api.get('/api/blogs')
//   const blog = response.body[0]
//   expect(blog.id).toBeDefined()
// })

// test('a valid blog can be added', async () => {
//   const newBlog = { title: 'New Blog', author: 'Tester', url: 'http://example.com', likes: 3 }

//   await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)

//   const response = await api.get('/api/blogs')
//   const titles = response.body.map(r => r.title)

//   expect(response.body).toHaveLength(initialBlogs.length + 1)
//   expect(titles).toContain('New Blog')
// })

// test('if likes property is missing, defaults to 0', async () => {
//   const newBlog = { title: 'Blog without likes', author: 'No Likes', url: 'http://nolikes.com' }
//   const response = await api.post('/api/blogs').send(newBlog).expect(201)
//   expect(response.body.likes).toBe(0)
// })

// test('blog without title is not added', async () => {
//   const newBlog = { author: 'Author', url: 'http://test.com', likes: 1 }
//   await api.post('/api/blogs').send(newBlog).expect(400)
// })

// test('blog without url is not added', async () => {
//   const newBlog = { title: 'Missing URL', author: 'Author', likes: 1 }
//   await api.post('/api/blogs').send(newBlog).expect(400)
// })

// // Delete test
// test('a blog can be deleted', async () => {
//   const blogsAtStart = await api.get('/api/blogs')
//   const blogToDelete = blogsAtStart.body[0]

//   await api
//     .delete(`/api/blogs/${blogToDelete.id}`)
//     .expect(204)

//   const blogsAtEnd = await api.get('/api/blogs')

//   expect(blogsAtEnd.body).toHaveLength(blogsAtStart.body.length - 1)

//   const titles = blogsAtEnd.body.map(b => b.title)
//   expect(titles).not.toContain(blogToDelete.title)
// })


// // PUT test
// test('a blog can be updated', async () => {
//   const blogsAtStart = await Blog.find({})
//   const blogToUpdate = blogsAtStart[0]

//   const updatedData = { likes: blogToUpdate.likes + 1 }

//   const result = await api
//     .put(`/api/blogs/${blogToUpdate.id}`)
//     .send(updatedData)
//     .expect(200)
//     .expect('Content-Type', /application\/json/)

//   expect(result.body.likes).toBe(blogToUpdate.likes + 1)
// })









// afterAll(async () => {
//   await mongoose.connection.close()
// })


// const mongoose = require('mongoose')
// const supertest = require('supertest')
// const bcrypt = require('bcrypt')
// const app = require('../app')
// const Blog = require('../models/blog')
// const User = require('../models/user')
// const config = require('../utils/config')

// const api = supertest(app)

// const initialBlogs = [
//   { title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7 },
//   { title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf', likes: 5 }
// ]

// beforeAll(async () => {
//   console.log('Connecting to:', config.MONGODB_URI)
//   await mongoose.connect(config.MONGODB_URI)
// })

// // Reset DB before each test
// beforeEach(async () => {
//   await Blog.deleteMany({})
//   await User.deleteMany({})

//   // create a test user
//   const passwordHash = await bcrypt.hash('sekret', 10)
//   const user = new User({ username: 'root', name: 'Superuser', passwordHash })
//   await user.save()

//   // insert initial blogs linked to the user
//   const blogObjects = initialBlogs.map(b => new Blog({ ...b, user: user._id }))
//   await Blog.insertMany(blogObjects)
// })

// // helper: get token for the test user
// const getAuthToken = async () => {
//   const loginResponse = await api
//     .post('/api/login')
//     .send({ username: 'root', password: 'sekret' })
//     .expect(200)

//   return loginResponse.body.token
// }

// // GET tests
// test('blogs are returned as json', async () => {
//   await api.get('/api/blogs')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })

// test('all blogs are returned', async () => {
//   const response = await api.get('/api/blogs')
//   expect(response.body).toHaveLength(initialBlogs.length)
// })

// test('unique identifier property is named id', async () => {
//   const response = await api.get('/api/blogs')
//   const blog = response.body[0]
//   expect(blog.id).toBeDefined()
// })

// // POST tests
// test('a valid blog can be added with token', async () => {
//   const token = await getAuthToken()
//   const newBlog = { title: 'Authorized blog', author: 'Tester', url: 'http://example.com', likes: 1 }

//   const response = await api.post('/api/blogs')
//     .set('Authorization', `Bearer ${token}`)
//     .send(newBlog)
//     .expect(201)
//     .expect('Content-Type', /application\/json/)

//   expect(response.body.title).toBe('Authorized blog')

//   const blogsAtEnd = await api.get('/api/blogs')
//   expect(blogsAtEnd.body).toHaveLength(initialBlogs.length + 1)
// })

// test('adding blog without token fails with 401', async () => {
//   const newBlog = { title: 'No token', author: 'Anon', url: 'http://a.com', likes: 0 }
//   await api.post('/api/blogs').send(newBlog).expect(401)
// })

// test('if likes property is missing, defaults to 0', async () => {
//   const token = await getAuthToken()
//   const newBlog = { title: 'Blog without likes', author: 'No Likes', url: 'http://nolikes.com' }

//   const response = await api.post('/api/blogs')
//     .set('Authorization', `Bearer ${token}`)
//     .send(newBlog)
//     .expect(201)

//   expect(response.body.likes).toBe(0)
// })

// test('blog without title is not added', async () => {
//   const token = await getAuthToken()
//   const newBlog = { author: 'Author', url: 'http://test.com', likes: 1 }
//   await api.post('/api/blogs')
//     .set('Authorization', `Bearer ${token}`)
//     .send(newBlog)
//     .expect(400)
// })

// test('blog without url is not added', async () => {
//   const token = await getAuthToken()
//   const newBlog = { title: 'Missing URL', author: 'Author', likes: 1 }
//   await api.post('/api/blogs')
//     .set('Authorization', `Bearer ${token}`)
//     .send(newBlog)
//     .expect(400)
// })

// // DELETE test
// test('a blog can be deleted', async () => {
//   const token = await getAuthToken()
//   const blogsAtStart = await api.get('/api/blogs')
//   const blogToDelete = blogsAtStart.body[0]

//   await api.delete(`/api/blogs/${blogToDelete.id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .expect(204)

//   const blogsAtEnd = await api.get('/api/blogs')
//   expect(blogsAtEnd.body).toHaveLength(blogsAtStart.body.length - 1)

//   const titles = blogsAtEnd.body.map(b => b.title)
//   expect(titles).not.toContain(blogToDelete.title)
// })

// // PUT test
// test('a blog can be updated', async () => {
//   const blogsAtStart = await Blog.find({})
//   const blogToUpdate = blogsAtStart[0]

//   const updatedData = { likes: blogToUpdate.likes + 1 }

//   const result = await api.put(`/api/blogs/${blogToUpdate.id}`)
//     .send(updatedData)
//     .expect(200)
//     .expect('Content-Type', /application\/json/)

//   expect(result.body.likes).toBe(blogToUpdate.likes + 1)
// })

// afterAll(async () => {
//   await mongoose.connection.close()
// })
























// tests/blog_api.test.js
const mongoose = require('mongoose')
const supertest = require('supertest')
const bcrypt = require('bcrypt')
const app = require('../app')
const Blog = require('../models/blog')
const User = require('../models/user')
const config = require('../utils/config')

const api = supertest(app)

const initialBlogs = [
  { title: 'React patterns', author: 'Michael Chan', url: 'https://reactpatterns.com/', likes: 7 },
  { title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf', likes: 5 }
]

beforeAll(async () => {
  await mongoose.connect(config.MONGODB_URI)
})

beforeEach(async () => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  // create a default user 'root' for many tests
  const passwordHash = await bcrypt.hash('sekret', 10)
  const user = new User({ username: 'root', name: 'Superuser', passwordHash })
  await user.save()

  // insert initial blogs linked to root
  const blogObjects = initialBlogs.map(b => ({ ...b, user: user._id }))
  await Blog.insertMany(blogObjects)
})

// helper: login root and return token
const getAuthToken = async () => {
  const loginResponse = await api
    .post('/api/login')
    .send({ username: 'root', password: 'sekret' })
    .expect(200)

  return loginResponse.body.token
}

// helper: create a new user (username param) and return its token
const createUserAndGetToken = async (username, password = 'sekret') => {
  // create user via API
  await api.post('/api/users')
    .send({ username, name: username, password })
    .expect(201)

  // login to get token
  const loginRes = await api.post('/api/login')
    .send({ username, password })
    .expect(200)

  return loginRes.body.token
}

/* ========= GET tests ========== */
test('blogs are returned as json', async () => {
  await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(initialBlogs.length)
})

test('unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')
  const blog = response.body[0]
  expect(blog.id).toBeDefined()
})

/* ========= POST tests (token required) ========== */
test('a valid blog can be added with token', async () => {
  const token = await getAuthToken()
  const newBlog = { title: 'Authorized blog', author: 'Tester', url: 'http://example.com', likes: 1 }

  const postRes = await api.post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  expect(postRes.body.title).toBe('Authorized blog')

  const blogsAtEnd = await api.get('/api/blogs')
  expect(blogsAtEnd.body).toHaveLength(initialBlogs.length + 1)
})

test('adding blog without token fails with 401', async () => {
  const newBlog = { title: 'No token', author: 'Anon', url: 'http://a.com', likes: 0 }
  await api.post('/api/blogs').send(newBlog).expect(401)
})

test('if likes property is missing, defaults to 0', async () => {
  const token = await getAuthToken()
  const newBlog = { title: 'Blog without likes', author: 'No Likes', url: 'http://nolikes.com' }

  const response = await api.post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(201)

  expect(response.body.likes).toBe(0)
})

test('blog without title is not added', async () => {
  const token = await getAuthToken()
  const newBlog = { author: 'Author', url: 'http://test.com', likes: 1 }
  await api.post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(400)
})

test('blog without url is not added', async () => {
  const token = await getAuthToken()
  const newBlog = { title: 'Missing URL', author: 'Author', likes: 1 }
  await api.post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(400)
})

/* ========= DELETE tests ========== */
test('creator can delete own blog (204)', async () => {
  const token = await getAuthToken()

  // create blog as this user
  const newBlog = { title: 'To be deleted', author: 'A', url: 'http://x', likes: 0 }
  const created = await api.post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(201)

  // delete it with same token
  await api.delete(`/api/blogs/${created.body.id}`)
    .set('Authorization', `Bearer ${token}`)
    .expect(204)

  const all = await api.get('/api/blogs')
  expect(all.body.map(b => b.id)).not.toContain(created.body.id)

  // check user's blogs array no longer contains it
  const users = await api.get('/api/users')
  const user = users.body.find(u => u.username === 'root')
  expect(user.blogs.map(b => b.toString())).not.toContain(created.body.id)
})

test('deletion by other user fails with 401', async () => {
  const tokenOwner = await createUserAndGetToken('owner')
  const tokenOther = await createUserAndGetToken('other')

  const created = await api.post('/api/blogs')
    .set('Authorization', `Bearer ${tokenOwner}`)
    .send({ title: 'Owner blog', url: 'http://a' })
    .expect(201)

  // attempt delete with different token
  await api.delete(`/api/blogs/${created.body.id}`)
    .set('Authorization', `Bearer ${tokenOther}`)
    .expect(401)
})

/* ========= PUT test ========== */
test('a blog can be updated', async () => {
  const blogsAtStart = await api.get('/api/blogs')
  const blogToUpdate = blogsAtStart.body[0]

  const updatedData = { likes: blogToUpdate.likes + 1 }

  const result = await api.put(`/api/blogs/${blogToUpdate.id}`)
    .send(updatedData)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(result.body.likes).toBe(blogToUpdate.likes + 1)
})

afterAll(async () => {
  await mongoose.connection.close()
})
