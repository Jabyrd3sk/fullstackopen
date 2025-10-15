import { createStore } from 'redux'
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    case 'ZERO':
        return 0
    default: // if  none above matches, code comes here
        return state
  }
}

const store = createStore(counterReducer)