// const Note = ({note}) => {
//     return <li>{note.content}</li>
// }
// export default Note





// Changing the Importance of Notes
const Note = ({note, toggleImportance}) => {
    const label = note.important
    ? 'make important'
    : 'make not important'
    
    return (
        <li className="note">
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note