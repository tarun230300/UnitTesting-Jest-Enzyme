import React,{useState} from 'react'

export const App = (props) => {
  const[counter,setCounter] = useState(0);
  return (
    <div>
      <h1>Unit Testing</h1>
      <h2>Ro-One InfoTech</h2>
      <div id='welcome'>Welcome {props.name}</div>
      <div id='initial_value'>{counter}</div>
      <button onClick={() => setCounter(counter+1)}></button>
    </div>
  )
}

export default App;
