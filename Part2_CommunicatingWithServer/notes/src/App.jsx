// const App = (props) => {
//   const {notes} = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }
// export default App


// const App = (props) => {
//   const {notes} = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <li>{note.content}</li>
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App



// Key-attribute
// const App = (props) => {
//   const {notes} = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <li key={note.id}>
//             {note.content}
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App



// Refactoring Modules
// const App = ({notes}) => {
//     return (
//         <div>
//           <h1>Notes</h1>
//             <ul>
//               {notes.map(note =>
//                 <li key={note.id}>
//                     {note.content}
//                 </li>
//               )}
//             </ul>
//         </div>
//     )
// }
// export default App

// const Note = ({note}) => {
//     return (
//         <li>{note.content}</li>
//     )
// }

// const App = ({notes}) => {
//     return (
//         <div>
//             <h1>Notes</h1>
//             <ul>
//               {notes.map(note =>
//                 <Note key={note.id} note={note} />
//               )}
//             </ul>
//         </div>
//     )
// }
// export default App


// import Note from './components/Note'

// const App = ({notes}) => {
//     return (
//         <div>
//             <h1>Notes</h1>
//             <ul>
//               {notes.map(note =>
//                 <Note key={note.id} note={note} />
//               )}
//             </ul>
//         </div>
//     )
// }
// export default App




// Part 2b: forms
// saving the notes in the components state
// import { useState } from "react";
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App



// import { useState } from "react";
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   const addNote = (event) => {
//     event.preventDefault()
//     console.log('button clicked', event.target)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }
// export default App




// Controlled component
// import { useState } from "react";
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note....'
//   )

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1)
//     }

//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value) 
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//         value={newNote}
//         onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }
// export default App




// Filtering Displayed Elements
// import { useState } from "react";
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1)
//     }

//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value) 
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notesToShow.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//         value={newNote}
//         onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }
// export default App



// import { useState } from "react";
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1)
//     }

//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value) 
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important': 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//         value={newNote}
//         onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }
// export default App






// Part 2c: Getting data from server
// Effect hooks
// import { useState, useEffect } from "react"; 
// import axios from 'axios'
// import Note from './components/Note'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     console.log('effect')
//     axios
//       .get('http://localhost:3001/notes')
//       .then(response => {
//         console.log('prominse fulfiled')
//         setNotes(response.data)
//       })
//   }, [])

//   console.log('render', notes.length, 'notes')


//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1)
//     }

//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value) 
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important': 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//         value={newNote}
//         onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }
// export default App






// Part 2d: Altering data in server
// Sending Data to the server
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './components/Note'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     axios.get('http://localhost:3001/notes').then((response) => {
//       setNotes(response.data)
//     })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     axios.post('http://localhost:3001/notes', noteObject).then((response) => {
//       setNotes(notes.concat(response.data))
//       setNewNote('')
//     })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App





// Changing the Importance of Notes
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './components/Note'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     axios.get('http://localhost:3001/notes').then((response) => {
//       setNotes(response.data)
//     })
//   }, [])

//   const toggleImportanceOf = (id) => {
//     const url = `http://localhost:3001/notes/${id}`
//     const note = notes.find(n => n.id === id)
//     const changedNote = {...note, important: !note.important}

//     axios.put(url, changedNote).then(response => {
//       setNotes(notes.map(note => note.id === id ? response.data : note))
//     })
//   }

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//   axios.post('http://localhost:3001/notes', noteObject)
//     .then((response) => {
//       setNotes(notes.concat(response.data))
//       setNewNote('')
//     })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll 
//     ? notes 
//     : notes.filter((note) => 
//       note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note 
//             key={note.id} 
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//             />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App






// Extracting Communication with the Backend into a Separate Module
// import { useState, useEffect } from 'react'
// import Note from './components/Note'
// import noteService from './services/notes'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     noteService
//       .getAll()
//       .then(initialNotes => {
//         setNotes(initialNotes)
//       })
//   }, [])

//   const toggleImportanceOf = (id) => {
//     const url = `http://localhost:3001/notes/${id}`
//     const note = notes.find(n => n.id === id)
//     const changedNote = {...note, important: !note.important}

//     noteService
//       .update(id, changedNote)
//       .then(returnedNote => {
//         setNotes(notes.map(note => note.id === id ? returnedNote : note))
//       })
//       .catch(error => {
//         alert(`the note '${note.content}' was already deleted from server`)
//         setNotes(notes.filter(n => n.id !== id))
//       })
//   }

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//   noteService
//     .create(noteObject)
//     .then(returnedNote => {
//       setNotes(notes.concat(returnedNote))
//       setNewNote('')
//     })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll 
//     ? notes 
//     : notes.filter((note) => 
//       note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note 
//             key={note.id} 
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//             />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App







// Part 2e: Adding styles to React App
// Improved Error Message
// import { useState, useEffect } from 'react'
// import Footer from './components/footer'
// import Note from './components/Note'
// import Notification from './components/Notification'
// import noteService from './services/notes'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const [errorMessage, setErrorMessage] = useState(null)

//   useEffect(() => {
//     noteService.getAll().then((initialNotes) => {
//       setNotes(initialNotes)
//     })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     noteService.create(noteObject).then((returnedNote) => {
//       setNotes(notes.concat(returnedNote))
//       setNewNote('')
//     })
//   }

//   const toggleImportanceOf = (id) => {
//     const note = notes.find((n) => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote)
//       .then((returnedNote) => {
//         setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
//       })
//       .catch((error) => {
//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter((n) => n.id !== id))
//       })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <Notification message={errorMessage} />
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note
//             key={note.id}
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//           />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//       <Footer />
//     </div>
//   )
// }

// export default App





// couple of important remarks
// import { useState, useEffect } from 'react'
// import Footer from './components/footer'
// import Note from './components/Note'
// import Notification from './components/Notification'
// import noteService from './services/notes'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const [errorMessage, setErrorMessage] = useState(null)

//   useEffect(() => {
//     noteService.getAll().then((initialNotes) => {
//       setNotes(initialNotes)
//     })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     noteService.create(noteObject).then((returnedNote) => {
//       setNotes(notes.concat(returnedNote))
//       setNewNote('')
//     })
//   }

//   const toggleImportanceOf = (id) => {
//     const note = notes.find((n) => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote)
//       .then((returnedNote) => {
//         setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
//       })
//       .catch((error) => {
//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter((n) => n.id !== id))
//       })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <Notification message={errorMessage} />
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note
//             key={note.id}
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//           />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//       <Footer />
//     </div>
//   )
// }

// export default App











// Part 5a: Log in frontend

// Adding a login form
// import { useState, useEffect, use } from 'react'
// import Footer from './components/footer'
// import Note from './components/Note'
// import Notification from './components/Notification'
// import noteService from './services/notes'
// import loginService from './services/login'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const [errorMessage, setErrorMessage] = useState(null)
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     noteService.getAll().then((initialNotes) => {
//       setNotes(initialNotes)
//     })
//   }, [])

//   useEffect(() => {
//     const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
//     if (loggedUserJSON) {
//       const user = JSON.parse(loggedUserJSON)
//       setUser(user)
//       noteService.setToken(user.token)
//     }
//   })

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     noteService.create(noteObject).then((returnedNote) => {
//       setNotes(notes.concat(returnedNote))
//       setNewNote('')
//     })
//   }

//   const toggleImportanceOf = (id) => {
//     const note = notes.find((n) => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote)
//       .then((returnedNote) => {
//         setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
//       })
//       .catch((error) => {
//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter((n) => n.id !== id))
//       })
//   }

//   const handleLogin = async (event) => {
//     event.preventDefault()
    
//     try {
//       const user = await loginService.login({ username, password })

//       window.localStorage.setItem(
//         'loggedNoteappUser', JSON.stringify(user)
//       )

//       noteService.setToken(user.token)
//       setUser(user)
//       setUsername('')
//       setPassword('')
//     } catch {
//       setErrorMessage('wrong credentials')
//       setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)
//     }
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important)

//   const loginForm = () => (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label>
//           username
//           <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           password
//           <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
//         </label>
//       </div>
//       <button type='submit'>login</button>
//     </form>
//   )

//   const noteForm = () => (
//     <form onSubmit={addNote}>
//       <input value={newNote} onChange={handleNoteChange} />
//       <button type='submit'>save</button>
//     </form>
//   )

//   return (
//     <div>
//       <h1>Notes</h1>
//       <Notification message={errorMessage} />
      
//       {!user && loginForm()}
//       {user && (
//         <div>
//           <p>{user.name} logged in</p>
//           {noteForm()}
//         </div>
//       )}
      
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note
//             key={note.id}
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//           />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
      
//       <Footer />
//     </div>
//   )
// }

// export default App




















// Part 5b: props.children and prototypes
import { useState, useEffect, useRef } from 'react'
import Footer from './components/Footer'
import Note from './components/Note'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'
import loginService from './services/login'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const noteFormRef = useRef()

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = noteObject => {
    noteFormRef.current.toggleVisibility()
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
    })
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => (note.id !== id ? note : returnedNote)))
      })
      .catch(() => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleNoteChange = event => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const loginForm = () => (
    <Togglable buttonLabel="login">
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  )

  const noteForm = () => (
    <Togglable buttonLabel="new note" ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  )

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

      {!user && loginForm()}
      {user && (
        <div>
          <p>{user.name} logged in</p>
          {noteForm()}
        </div>
      )}

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default App