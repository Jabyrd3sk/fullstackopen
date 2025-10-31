const React = require('react')
const ReactDOM =  require('react-dom/client')
const App = require('./App')

require ('core-js/stable/index.js')
require ('regenerator-runtime/runtime.js')

ReactDOM.createRoot(document.getElementById('root')).render(<App />)