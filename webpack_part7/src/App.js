const {useState, useEffect} = require ('react')
const React = require ('react') // we need this also in component files
require ('./index.css')
// require ('../webpack.config.cjs')

const useNotes = (url) => {
    const [notes, setNotes] = ([])
    useEffect(() => {
        axios.get(url).then(response => {
            setNotes(response.data)
        })
    }, [url])
    return notes
}

const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState([])
    const notes = useNotes(BACKEND_URL)

    const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
    }

    return (
        <div className='container'>
            hello webpack {counter} clicks
            <button onClick={handleClick}>press</button>
            <div>{notes.length} notes on server {BACKEND_URL}</div>
        </div>
    )
}

module.exports = App