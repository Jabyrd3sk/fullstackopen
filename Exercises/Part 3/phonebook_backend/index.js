const express = require('express')
const app = express()

const persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World! This is phonebook</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const numOfPerson = persons.length
    const receivedAt = new Date().toString()

    response.send(`<p>Phonebook has info for ${numOfPerson} people</p><p>${receivedAt}</p>`)            
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    response.json(person)
})

app.delete('api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(203).end()
})

const PORT = 3001
app.listen(PORT, () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})