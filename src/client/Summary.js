// Number of correct answers
// Number of incorrect answers
// Total number of questions answered
// The final score (%)
// A button to restart the Quiz with a different questions // need to reset state

import React from 'react'

export default function Summary () { //will need to take props
return (
  <div>
    <h1>SUMMARY</h1>
    <p>Correct</p>
    <p>Wrong</p>
    <p>Questions Answered</p>
    <p>Final Score</p> 
    <button>Restart Quiz</button>
  </div>
)
}
