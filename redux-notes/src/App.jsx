import NoteForm from "./components/NoteForm";
import Notes from './components/Notes'
import VibilityFilter from "./components/VisibilityFilter"

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div>
      <NoteForm />
      <VibilityFilter />
      <Notes />
    </div>
  )
}

export default App