// Part3c Saving data to MongoDB

// Debugging node applications
// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://fullstack:Mongodb99@cluster0.omumivi.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.set('strictQuery',false)

// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })




// Fetching objects from the database
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.omumivi.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// prints all the notes stored in the database
Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note)
  })
  mongoose.connection.close()
})

// we can restrict our search to only include important notes like this
// Note.find({important: true}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })

// (node mongo.js Mongodb99) ---[cmd to run mongodb]
