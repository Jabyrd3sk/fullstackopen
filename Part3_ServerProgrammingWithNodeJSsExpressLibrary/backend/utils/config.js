// Part 4a, Structure of backend application, introduction to testing
// require('dotenv').config()

// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

// module.exports = { MONGODB_URI, PORT }





// Part 4b Testing backend

// Test environment
require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = { MONGODB_URI, PORT }
