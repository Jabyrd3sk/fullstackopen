// const app = require('./app') // the actual express application
// const http = require('http')
// const mongoose = require('mongoose')
// const config = require('./utils/config')

// mongoose.connect(config.MONGODB_URI)
//     .then(() => {
//         console.log('connected to MongoDB')
//     })
//     .catch((error) => {
//         console.error('error connecting to MongoDB', error.message)
//     })

// const server = http.createServer(app)
// server.listen(config.PORT, () => {
//     console.log(`Server running on port ${config.PORT}`)
// })

// // app.listen(config.PORT, () => {
// //   logger.info(`Server running on port ${config.PORT}`)
// // })





// Exercises 4.8.-4.12
// const http = require('http')
// const mongoose = require('mongoose')
// const app = require('./app')
// const config = require('./utils/config')

// mongoose.set('strictQuery', false)

// mongoose.connect(config.MONGODB_URI)
//   .then(() => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.error('error connection to MongoDB:', error.message)
//   })

// const server = http.createServer(app)

// server.listen(config.PORT, () => {
//   console.log(`Server running on port ${config.PORT}`)
// })



// index.js
const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./utils/config')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
    const server = http.createServer(app)
    server.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`)
    })
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message)
  })


