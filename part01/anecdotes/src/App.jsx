import { useState } from 'react'

const AnecdoteDay = ({anecdote, votes}) => (
  <div>
    <h2>Anecdote of the day</h2>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
)
const AnecdoteMostVotes = ({anecdote}) => (
  <div>
    <h2>Anecdote with most votes</h2>
    <p>{anecdote}</p>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [recordVotes, setRecordVotes] = useState(0)

  const handleVoteButton = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    if(votesCopy[selected] > recordVotes)
      setRecordVotes(votesCopy[selected])
    console.log('votesCopy: ', votesCopy)
    
  }
  const handleNextButton = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <AnecdoteDay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleVoteButton}>vote</button>
      <button onClick={handleNextButton}>next anecdote</button>
      <AnecdoteMostVotes anecdote={anecdotes[votes.indexOf(recordVotes)]} />
    </div>
  )
}

export default App