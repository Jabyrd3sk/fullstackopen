// const jwt = require('jsonwebtoken')
// const blogsRouter = require('express').Router()
// const Blog = require('../models/blog')
// const User = require('../models/user')

// blogsRouter.get('/', async (request, response) => {
//   const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })

//   response.json(blogs)
// })

// // GET all blogs
// blogsRouter.get('/', async (request, response) => {
//     const blogs = await Blog.find({})
//     response.json(blogs)
// })

// // POST a new blog
// // blogsRouter.post('/', async (request, response, next) => {
// //     const body = request.body

// //     if (!body.title || !body.url) {
// //         return response.status(400).json({ error: 'title or url missing' })
// //     }

// //     const blog = new Blog({
// //         title: body.title,
// //         author: body.author,
// //         url: body.url,
// //         likes: body.likes || 0
// //     })

// //     try {
// //         const saved = await blog.save()
// //         response.status(201).json(saved)
// //     } catch (error) {
// //         next(error)
// //     }
// // })

// blogsRouter.post('/', async (request, response, next) => {
//   try {
//     const body = request.body

//     const token = request.token
//     if (!token) {
//       return response.status(401).json({ error: 'token missing' })
//     }

//     let decodedToken
//     try {
//       decodedToken = jwt.verify(token, process.env.SECRET)
//     } catch (err) {
//       return response.status(401).json({ error: 'token invalid' })
//     }

//     if (!decodedToken.id) {
//       return response.status(401).json({ error: 'token invalid' })
//     }

//     const user = await User.findById(decodedToken.id)
//     if (!user) {
//       return response.status(400).json({ error: 'user not found' })
//     }

//     if (!body.title || !body.url) {
//       return response.status(400).json({ error: 'title or url missing' })
//     }

//     const blog = new Blog({
//       title: body.title,
//       author: body.author,
//       url: body.url,
//       likes: body.likes || 0,
//       user: user._id
//     })

//     const savedBlog = await blog.save()

//     // add blog to user
//     user.blogs = user.blogs.concat(savedBlog._id)
//     await user.save()

//     response.status(201).json(savedBlog)
//   } catch (error) {
//     next(error)
//   }
// })

// // DELETE a blog
// // blogsRouter.delete('/:id', async (request, response) => {
// //   await Blog.findByIdAndDelete(request.params.id)
// //   response.status(204).end()
// // })

// blogsRouter.delete('/:id', async (request, response, next) => {
//   try {
//     const token = request.token
//     if (!token) {
//       return response.status(401).json({ error: 'token missing' })
//     }

//     let decodedToken
//     try {
//       decodedToken = jwt.verify(token, process.env.SECRET)
//     } catch (err) {
//       return response.status(401).json({ error: 'token invalid' })
//     }

//     if (!decodedToken.id) {
//       return response.status(401).json({ error: 'token invalid' })
//     }

//     const blog = await Blog.findById(request.params.id)
//     if (!blog) {
//       return response.status(404).json({ error: 'blog not found' })
//     }

//     // blog.user may be an ObjectId (or an object if populated) -> convert to string
//     if (!blog.user || blog.user.toString() !== decodedToken.id.toString()) {
//       return response.status(401).json({ error: 'only the creator can delete the blog' })
//     }

//     // delete the blog
//     await Blog.findByIdAndDelete(request.params.id)

//     // remove blog id from user's blogs array
//     const user = await User.findById(decodedToken.id)
//     if (user) {
//       user.blogs = user.blogs.filter(b => b.toString() !== request.params.id.toString())
//       await user.save()
//     }

//     return response.status(204).end()
//   } catch (error) {
//     next(error)
//   }
// })


// // update
// blogsRouter.put('/:id', async (request, response) => {
//   const body = request.body

//   const updatedBlog = await Blog.findByIdAndUpdate(
//     request.params.id,
//     { likes: body.likes },
//     { new: true, runValidators: true, context: 'query' }
//   )

//   response.json(updatedBlog)
// })

// module.exports = blogsRouter











// controllers/blogs.js
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const middleware = require('../utils/middleware')

// GET (public) — no userExtractor so works w/o token
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

// POST (protected) — attach user with middleware
blogsRouter.post('/', middleware.userExtractor, async (request, response, next) => {
  try {
    const body = request.body
    const user = request.user          // <- set by userExtractor

    if (!body.title || !body.url) {
      return response.status(400).json({ error: 'title or url missing' })
    }

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    // If you want user populated in response:
    const populated = await Blog.findById(savedBlog._id).populate('user', { username: 1, name: 1 })
    response.status(201).json(populated)
  } catch (error) {
    next(error)
  }
})

// DELETE (protected) — attach user with middleware
blogsRouter.delete('/:id', middleware.userExtractor, async (request, response, next) => {
  try {
    const user = request.user // owner candidate
    const blog = await Blog.findById(request.params.id)

    if (!blog) {
      return response.status(404).json({ error: 'blog not found' })
    }

    // blog.user is ObjectId — convert to string for comparison
    if (!blog.user || blog.user.toString() !== user._id.toString()) {
      return response.status(401).json({ error: 'only creator can delete the blog' })
    }

    await Blog.findByIdAndDelete(request.params.id)

    // remove from user's blogs
    user.blogs = user.blogs.filter(b => b.toString() !== request.params.id.toString())
    await user.save()

    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

// update blog
blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    body,
    { new: true, runValidators: true, context: 'query' }
  )

  if (updatedBlog) {
    response.json(updatedBlog)
  } else {
    response.status(404).end()
  }
})


module.exports = blogsRouter