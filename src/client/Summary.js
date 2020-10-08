import React from 'react'

export default function Summary ({questionNum, correct, wrong}) { 
  return (
    <div>
      <h2>SUMMARY</h2>
      <div>Correct: <b>{correct}</b> </div>
      <div>Wrong: <b>{wrong}</b> </div>
      <div>Questions Answered: <b>{questionNum}</b> </div>
      <div>Final Score: <b>{Math.round((correct/questionNum)*100)}%</b> </div> 
      <br/>
      <button onClick={()=>{window.location.reload()}}>Restart Quiz</button>
    </div>
  )
}
