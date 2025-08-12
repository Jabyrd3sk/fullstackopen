const Phonebook = ({name, number, handleDelete}) => {
  return (
    <li>
      {name} {number}
      <button onClick={handleDelete}>delete</button>
    </li>
  )
}
export default Phonebook