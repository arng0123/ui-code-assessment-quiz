import React, {useState, useEffect} from 'react'

export default function Multiple ({question}) {
  const [userAnswer, setAnswer] = useState('')


  return(
    <div>
      {question.question}
      <form>
        <label>
          <input 
          type = "radio"
          />
          TEST
        </label>
        <button>Next</button>
      </form>
    </div>
  )
}

//put incorrect answers and correct answers in an array //map over this array

// on each radio click set it on state
// on the form submit compare this with the correct answer from the prop ==> call answer submit

//
