import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  
  const [activities,setActivities] = useState([])
  const [isLoading,isSetLoading] = useState(true)

 
  let isLoad = () => {

    isSetLoading(true)
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => setActivities([...activities , data.activity]));
      isSetLoading(false)
  }

  useEffect(() => { isLoad() },[])

  if(isLoading){
    return <h1>Loading...</h1>
  }
  
  return (
    <div>

      <ul>
          {activities.map((elem,index) => {
              return <li key={index}>{elem}</li>
          })}
      </ul>
      <button onClick={isLoad}>Load Another</button>
    </div>
  )
}

export default App
