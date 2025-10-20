import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { createAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions

// 6.14 — fetch anecdotes
export const initializeAnecdotes = () => {
  return async dispatch => {
    const response = await fetch('http://localhost:3000/anecdotes')
    const anecdotes = await response.json()
    dispatch(setAnecdotes(anecdotes))
  }
}

// 6.15 — create anecdote in backend
export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = { content, votes: 0 }
    const response = await fetch('http://localhost:3000/anecdotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAnecdote)
    })
    const data = await response.json()
    dispatch(createAnecdote(data))
  }
}

export default anecdoteSlice.reducer
