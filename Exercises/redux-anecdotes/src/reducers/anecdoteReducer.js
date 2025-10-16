import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    { content: 'If it hurts, do it more often', votes: 3, id: '1'},
    { content: 'Adding manpower to a late software project makes it later!', votes: 1, id: '2'},
    { content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0, id: '3'},
    { content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 4, id: '4'},
    { content: 'Premature optimization is the root of all evil', votes: 1, id: '5'},
    { content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 2, id: '6'},    
  ],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdotesToChange = state.find(a => a.id === id)
      anecdotesToChange.votes += 1
    },
    
    createAnecdote(state, action) {
      state.push(action.payload)
    },
  },
})


export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
