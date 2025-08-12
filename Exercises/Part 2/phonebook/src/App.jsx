import { useState, useEffect } from "react"; 
import Phonebook from './components/phonebook'
import Notification from "./components/Notification";
import phonebookService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: '39445323523'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification ] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    const numberExists = persons.some(person => person.number === newNumber)
    
    if (nameExists || numberExists) {      
      return( 
        alert(nameExists
        ? `${newName} is already in the phonebook`
        : `Number ${newNumber} is already in the phonebook`)
      )
    }

    const nameObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }
  
    phonebookService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    
    setNotification(`Added ${newName}`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLocaleLowerCase())
      )
    : persons
  
  const handleDelete = (id) => {
      // const url = `http://localhost:3001/persons/${id}`
      const person = persons.find(p => p.id === id)
      if (!window.confirm(`Are you sure you want to delete ${person.name}?`)) return
  
      phonebookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(`Failed to delete information on  ${person.name} from server`)
        })
    }
  
  
  
  return (
    <div>
      <Notification notification={notification} />
      <h2>Phonebook</h2>
      
      <div>
        filter shown with <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />
        </div>

        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <Phonebook 
            key={person.id} 
            name={person.name}
            number={person.number}
            handleDelete={() => handleDelete(person.id)}
             />
        )}
      </ul>
    </div>
  )
}
export default App



// const existingPerson = persons.find(p => p.name === newName)

  // if (existingPerson) {
  //   const ok = window.confirm(
  //     `${newName} is already added to phonebook, replace
  //     the old number (${existingPerson.number}) with a new one (${newNumber})?`
  //   )
  //   if (!ok) {
  //     return
  //   }

  //   const updatedPerson = {...existingPerson, number: newNumber}
  //   phonebookService
  //     .update(existingPerson.id, updatedPerson)
  //     .then(response => {
  //       setPersons(persons.map(p =>
  //         p.id !== existingPerson.id ? p: response.data
  //       ))
  //       setNewName('')
  //       setNewNumber('')
  //     })
  //     .catch(error => {
  //       alert(`Failed to update number for ${newName}`)
  //     })
    
  //     return
  // }
  
  // const nameObject = {
  //   name: newName,
  //   number: newNumber
  // }
  // phonebookService
  //   .create(nameObject)
  //   .then(response => {
  //     setPersons(persons.concat(response.data))
  //     setNewName('')
  //     setNewNumber('')
  //   })
