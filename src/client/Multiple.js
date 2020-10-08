import React, {useState, useEffect} from 'react'

export default function Multiple ({question, answerSubmit}) {
  let [userAnswer, setAnswer] = useState('')
  
  //need to shuffle the responses and map over array
  let answerChoices = [question.correct_answer,...question.incorrect_answers]
  const shuffleQ = (answerChoices) => {
    let start = 0
    let shuffledQ = []

    while (start < answerChoices.length) {
      shuffledQ.push(answerChoices[Math.floor(Math.random() * Math.floor(answerChoices.length-1))])
      start++
    }

    answerChoices = shuffleQ
  }
  
  //need handleSubmit to do an answer check 
  const handleSubmit = (e) => {
    e.preventDefault()

    userAnswer === question.correct_answer ? answerSubmit(true) : answerSubmit(false)

    setAnswer('')
  }

  //handle change
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  return(
    <div>
      {question.question}
      <form onSubmit = {handleSubmit}>
        {answerChoices.map(choice => {
          return(
            <div key={choice}>
              <input
              type = "radio"
              value = {choice}
              name = {choice}
              onChange = {handleChange}
              />
            {choice}
            </div>
          )
        })}
        <button>Next</button>
      </form>
    </div>
  )
}

