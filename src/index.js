import ReactDOM from 'react-dom';
import { useState } from 'react';

const Display = props => <tr><td>{props.id}:</td><td>{props.text}:</td><td>{props.value}</td></tr>


const Statistics = ({good,neutral,bad,all}) =>{ 
  if(all>0){
  return( 
    <div>
      <table>
        <tbody>
        <Display value={good} text="good"/>
        <Display value={neutral} text="neutral"/>
        <Display value={bad} text="bad"/>
        <Display value={all} text="all"/>
        <Display value={(all>0?good/all-bad/all:0)} text="average"/>
        <Display value={(all>0?good*100/all+'%':0)} text="positive"/>
        </tbody>
      </table>
    </div>
  )
  }
  else {
    return(<div>No feedback given</div>)
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => {setGood(good+1); setAll(all+1) } } text="good" />
      <Button handleClick={() => {setNeutral(neutral+1); setAll(all+1) } } text="neutral" />
      <Button handleClick={() => {setBad(bad+1); setAll(all+1) } } text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>      
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
