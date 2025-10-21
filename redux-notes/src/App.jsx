// import NoteForm from "./components/NoteForm";
// import Notes from './components/Notes'
// import VibilityFilter from "./components/VisibilityFilter"

// const App = () => {
//   const filterSelected = (value) => {
//     console.log(value)
//   }

//   return (
//     <div>
//       <NoteForm />
//       <VibilityFilter />
//       <Notes />
//     </div>
//   )
// }

// export default App









// Part 6c: Communicating with server in a redux application
// Initializing the store with data fetched from server

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import NoteForm from './components/NoteForm'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { setNotes } from './reducers/noteReducer'
import noteService from './services/notes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App