// const NoteForm = ({ onSubmit, handleChange, value}) => {
//     return (
//         <div>
//             <h2>Create a new note</h2>

//             <form onSubmit={onSubmit}>
//                 <input value={value} onChange={handleChange} />
//                 <button type="submit">save</button>
//             </form>
//         </div>
//     )
// }
// export default NoteForm 




// Part 5b: Props children and proptypes

// state of the forms
// import { useState } from "react"

// const NoteForm = ({ createNote }) => {
//     const [newNote, setNewNote] = useState('')

//     const addNote = (event) => {
//         event.preventDefault()
//         createNote({
//             content: newNote,
//             important: true
//         })

//         setNewNote('')
//     }

//     return (
//         <div>
//             <h2>Create a new note</h2>

//             <form onSubmit={addNote}>
//                 <input value={newNote} onChange={event => setNewNote(event.target.value)} />
//                 <button type="submit">save</button>
//             </form>
//         </div>
//     )
// }

// export default NoteForm





// Part 5c: Testing react apps
// About finding the elements
import { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const addNote = event => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: true
    })

    setNewNote('')
  }

  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={event => setNewNote(event.target.value)}
          placeholder="write note content here"
          id='new-note-field'
        />
        <button type="submit" id='save-note'>
          save
        </button>
      </form>
    </div>
  )
}

export default NoteForm