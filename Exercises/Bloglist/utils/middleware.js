// const tokenExtractor = (request, response, next) => {
//     const authorization = request.get('authorization')
//     if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
//         request.token = authorization.substring(7)
//     }
//     next()
// }

// module.exports = {
//     tokenExtractor
// }


// utils/middleware.js
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// already-existing token extractor (must be registered before routes)
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null
  }
  next()
}

/*
 userExtractor:
 - expects tokenExtractor to have already run (so request.token exists)
 - verifies token, finds user and sets request.user
 - if token missing/invalid or no user -> responds 401 (because route requires auth)
*/
const userExtractor = async (request, response, next) => {
  const token = request.token
  if (!token) {
    return response.status(401).json({ error: 'token missing' })
  }

  let decodedToken
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (error) {
    return response.status(401).json({ error: 'token invalid' })
  }

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }

  const user = await User.findById(decodedToken.id)
  if (!user) {
    return response.status(401).json({ error: 'user not found' })
  }

  request.user = user
  next()
}

module.exports = {
  tokenExtractor,
  userExtractor
}

