import React, {useState, useEffect} from 'react'

export default function Multiple ({q}) {
  const [userAnswer, setAnswer] = useState('')


  return(
    <div>
      THIS IS A MULTI Q
      <form>
        <label>
         <p>{q ? q.question : null}</p>
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

//put incorrect answers and correct answers in an array
// on each radio click set it on state
// on the form submit compare this with the correct answer from the prop ==> call answer submit
