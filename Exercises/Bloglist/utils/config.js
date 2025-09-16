// require('dotenv').config()

// const PORT = process.env.PORT || 3003
// const MONGODB_URI = process.env.MONGODB_URI

// module.exports = {
//     MONGODB_URI,
//     PORT
// }



// Exercise 4.8-4.12
require('dotenv').config()

const PORT = process.env.PORT || 3003

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = { MONGODB_URI, PORT }
