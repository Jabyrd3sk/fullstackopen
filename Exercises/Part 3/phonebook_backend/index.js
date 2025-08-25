// const express = require('express')
// const app = express()

// const persons = [
//     {
//         "id": "1",
//         "name": "Arto Hellas",
//         "number": "040-123456"
//     },
//     {
//         "id": "2",
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523"
//     },
//     {
//         "id": "3",
//         "name": "Dan Abramov",
//         "number": "12-43-234345"
//     },
//     {
//         "id": "4",
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122"
//     }
// ]

// app.get('/', (request, response) => {
//     response.send('<h1>Hello World! This is phonebook</h1>')
// })

// app.get('/api/persons', (request, response) => {
//     response.json(persons)
// })

// app.get('/info', (request, response) => {
//     const numOfPerson = persons.length
//     const receivedAt = new Date().toString()

//     response.send(`<p>Phonebook has info for ${numOfPerson} people</p><p>${receivedAt}</p>`)            
// })

// app.get('/api/persons/:id', (request, response) => {
//     const id = request.params.id
//     const person = persons.find(person => person.id === id)
//     response.json(person)
// })

// app.delete('api/persons/:id', (request, response) => {
//     const id = request.params.id
//     persons = persons.filter(person => person.id !== id)
//     response.status(203).end()
// })

// const PORT = 3001
// app.listen(PORT, () => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`)
//     })
// })




// 
const express = require('express')
const app = express()

let persons = [
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

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)


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
    response.json(persons)
    
})

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map((p) => Number(p.id)))
        : 0
    return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name and number required'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    console.log('Created person (server):', person)
    persons = persons.concat(person)

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

console.log('RUNNING FILE:', __filename)
console.log('CWD', process.cwd())











