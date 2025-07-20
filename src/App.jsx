import { useEffect, useState } from 'react'

const url = "http://localhost:3000/goals";



function App() {

  const[goals, setGoals] = useState([]); // set the state

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => setGoals(data))
  },[]);
 
 console.log("x", goals);

  return (
    <>

    <div className='align-top'>
      <h1>Smart Goal Planner</h1>
      
     <ul>
        {goals.map(goal =>(<li key = {goal.id}> 
            {goal.name} &nbsp; <b>{goal.targetAmount}</b>
            </li>))}
    
      </ul>
      

    </div>
      
    </>
  )
}

export default App
