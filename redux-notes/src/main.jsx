// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'

// import App from './App'
// import filterReducer from './reducers/filterReducer'
// import noteReducer from './reducers/noteReducer'

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// })

// const store = createStore(reducer)

// console.log(store.getState())

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )









// Part 6b: Many Reducers
// Redux Toolkit and Refactoring the Store Configuration

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)