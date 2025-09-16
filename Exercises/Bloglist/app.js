const express = require('express')
const cors = require('cors')
const app = express()
const middleware = require('./utils/middleware')

const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const errorHandler = (error, request, response, next) => {
  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.code === 11000) {
    return response.status(400).json({ error: 'username must be unique' })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())

app.use(middleware.tokenExtractor)
app.use('/api/login', loginRouter)

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)

app.use(unknownEndpoint)
app.use (errorHandler)

module.exports = app
