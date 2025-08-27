// const http = require('http')

// let notes = [
//     {
//         id: "1",
//         content: "HTML is easy",
//         important: true
//     },
//     {
//         id: "2",
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true
//     }
// ]
// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

// Web and Express
// const express = require('express')
// const app = express()

// let notes = [
//     {
//         id: "1",
//         content: "HTML is easy",
//         important: true
//     },
//     {
//         id: "2",
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true
//     }
// ]

// app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//     response.json(notes)
// })

// const PORT = 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

// Fetching a single resource
// const express = require('express')
// const app = express()

// let notes = [
//     {
//         id: "1",
//         content: "HTML is easy",
//         important: true
//     },
//     {
//         id: "2",
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true
//     }
// ]

// app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => note.id === id)

//     if (note) {
//         response.json(note)
//     } else {
//         response.status(404).end()
//     }
// })

// const PORT = 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

// Deleting resources
// const express = require('express')
// const app = express()

// let notes = [
//     {
//         id: "1",
//         content: "HTML is easy",
//         important: true
//     },
//     {
//         id: "2",
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: "3",
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true
//     },
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   response.json(notes)
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find(note => note.id === id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// Receiving data
// const express = require('express')
// const app = express()

// app.use(express.json())

// let notes = [
//     {
//         id: "1",
//         content: "HTML is easy",
//         important: true
//     },
//     {
//         id: "2",
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: "3",
//         content: "GET and POST are the most important methods of HTTP protocol",
//         important: true
//     },
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   response.json(notes)
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find(note => note.id === id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

// const generateId = () => {
//     const maxId = notes.length > 0
//       ? Math.max(...notes.map(n => Number(n.id)))
//       : 0
//     return String(maxId + 1)
// }

// app.post('/api/notes', (request, response) => {
//     const body = request.body

//     if (!body.concat) {
//         return response.status(400).json({
//             error: 'concat missing'
//         })
//     }

//     const note = {
//         content: body.content,
//         important: body.important || false,
//         id: generateId(),
//     }

//     notes = notes.concat(note)
//     response.json(note)
// })

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// Middleware
// const express = require('express')
// const cors = require('cors')

// const app = express()

// let notes = [
//   {
//     id: '1',
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: '2',
//     content: 'Browser can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: '3',
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   },
// ]

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(cors())

// app.use(express.json())
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   response.json(notes)
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find((note) => note.id === id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// const generateId = () => {
//   const maxId =
//     notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0
//   return String(maxId + 1)
// }

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({
//       error: 'content missing',
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     id: generateId(),
//   }

//   notes = notes.concat(note)

//   response.json(note)
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   notes = notes.filter((note) => note.id !== id)

//   response.status(204).end()
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// Part3c Saving data to mongodb
// Application to the internet
// const express = require('express')
// const app = express()
// // const cors = require('cors')

// let notes = [
//   {
//     id: '1',
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: '2',
//     content: 'Brows er can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: '3',
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   },
// ]

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// // app.use(cors())
// app.use(express.static('dist'))
// app.use(express.json())
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   response.json(notes)
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find((note) => note.id === id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// // const path = require('path')
// // app.use(express.static(path.join(__dirname, 'dist')))

// const generateId = () => {
//   const maxId = notes.length > 0
//     ? Math.max(...notes.map((n) => Number(n.id)))
//     : 0
//   return String(maxId + 1)
// }

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({
//       error: 'content missing',
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     id: generateId(),
//   }

//   console.log('Created note (server):', note);
//   notes = notes.concat(note)

//   response.json(note)
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   notes = notes.filter((note) => note.id !== id)

//   response.status(204).end()
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// //console.log('RUNNING FILE:', __filename)
// //console.log('CWD:', process.cwd())

// Connecting the backend to a database
// const express = require('express')
// const app = express()

// let notes = [
//   {
//     id: '1',
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: '2',
//     content: 'Brows er can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: '3',
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   },
// ]

// const mongoose = require('mongoose')
// const password = process.argv[2]
// const url =  `mongodb+srv://fullstack:${password}@cluster0.omumivi.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.set('strictQuery', false)
// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.static('dist'))
// app.use(express.json())
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find((note) => note.id === id)

//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// const generateId = () => {
//   const maxId = notes.length > 0
//     ? Math.max(...notes.map((n) => Number(n.id)))
//     : 0
//   return String(maxId + 1)
// }

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({
//       error: 'content missing',
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     id: generateId(),
//   }

//   console.log('Created note (server):', note);
//   notes = notes.concat(note)

//   response.json(note)
// })

// app.delete('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   notes = notes.filter((note) => note.id !== id)

//   response.status(204).end()
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// //console.log('RUNNING FILE:', __filename)
// //console.log('CWD:', process.cwd())

// Defining environment variables using a dot env library
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// require('dotenv').config()
// const express = require('express')
// const Note = require('./models/note.js')

// const app = express()

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.static('dist'))
// app.use(express.json())
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// app.get('/api/notes/:id', (request, response) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => {
//       response.status(400).send({ error: 'malformatted id' })
//     })
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({
//       error: 'content missing',
//     })
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   })

//   note.save().then(savedNote => {
//     response.json(savedNote)
//   })
// })

// app.delete('/api/notes/:id', (request, response) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end()
//     })
//     .catch(error => {
//       response.status(400).send({ error: 'malformatted id' })
//     })
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// //console.log('RUNNING FILE:', __filename)
// //console.log('CWD:', process.cwd())

// Error handling
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// require('dotenv').config()
// const express = require('express')
// const Note = require('./models/note.js')

// const app = express()

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.static('dist'))
// app.use(express.json())
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch((error) => next(error))
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({
//       error: 'content missing',
//     })
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   })

//   note.save().then(savedNote => {
//     response.json(savedNote)
//   })
// })

// app.put('/api/notes/:id', (request, response, next) => {
//   const {content, important} = request.body

//   Note.findById(request.params.id)
//     .then(note => {
//       if (!note) {
//         return response.status(404).end()
//       }

//       note.content = content
//       note.important = important

//       return note.save().then((updateNote) => {
//         response.json(updateNote)
//       })
//     })
//     .catch(error => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)
//   if (error.name === 'CastError') {
//     return response.status(400).send({error: 'malformatted id'})
//   }
//   next(error)
// }

// app.use(errorHandler)

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// //console.log('RUNNING FILE:', __filename)
// //console.log('CWD:', process.cwd())






// Part3d Validation and Eslint
// require('dotenv').config()
// console.log('MONGODB_URI:', process.env.MONGODB_URI)
// const express = require('express')
// const Note = require('./models/note')

// const app = express()

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message })
//   }

//   next(error)
// }
// app.use(express.json())
// app.use(express.static('dist'))
// app.use(requestLogger)

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then((notes) => {
//     response.json(notes)
//   })
// })

// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch((error) => next(error))
// })

// app.post('/api/notes', (request, response, next) => {
//   const body = request.body
//   if (!body || !body.content) {
//     return response.status(400).json({ error: 'content missing' })
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   })

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote)
//     })
//     .catch((error) => next(error))
// })

// app.put('/api/notes/:id', (request, response, next) => {
//   const { content, important } = request.body

//   Note.findById(request.params.id)
//     .then((note) => {
//       if (!note) {
//         return response.status(404).end()
//       }

//       note.content = content
//       note.important = important

//       return note.save().then((updatedNote) => {
//         response.json(updatedNote)
//       })
//     })
//     .catch((error) => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch((error) => next(error))
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)
// app.use(errorHandler)

// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// //console.log('RUNNING FILE:', __filename)
// //console.log('CWD:', process.cwd())





// Part 4a, Structure of backend application, introduction to testing
const app =  require('./app') // the actual express application
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})