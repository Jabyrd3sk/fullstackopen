import { useState } from 'react'
const Statistics = (props) => {
  if (props.total === 0){
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <p>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      all {props.total}<br/>
      average {props.average}%<br/>
      positive {props.positive}<br/>
    </p>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const App = () => {
  // save clicks for each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1)) / total
  const positive = (good / total) * 100


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
      
    </div>
  )
}
export default App