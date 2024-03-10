import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all > 0 
    ? (good - bad) / all
    : 0
  const positive = all > 0
    ? 100 * good / all + ' %'
    : 0 + ' %'
  if(!all)
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  return(
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive} />
        </tbody>
      </table>
    </>
  )
}
const StatisticsLine = ({text, value}) => (
  <tr>
    <td>
      {text} 
    </td>
    <td>
      {value} 
    </td>
  </tr>
)
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGood} text='good'/>
        <Button onClick={handleNeutral} text='neutral'/>
        <Button onClick={handleBad} text='bad'/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App