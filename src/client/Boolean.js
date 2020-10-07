import React, {useState} from 'react'

export default function Boolean ({question, answerSubmit}) {
const [selectedAnswer, setselectedAnswer] = useState()

//need handleChange func to set state on selected answer
const handleChange = (e) => {
  setselectedAnswer(e.target.value)
}

//need handleSubmit to do an answer check 
const handleSubmit = (e) => {
  e.preventDefault()

  selectedAnswer === question.correct_answer ? answerSubmit(true) : answerSubmit(false)

  setselectedAnswer('')
}

  return(
    <div>
      {question.question}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
          type = "radio"
          value = "True"
          name = "answer"
          onChange = {handleChange}
          />
          True
        </div>

        <div>
          <input 
          type = "radio"
          value = "False"
          name = "answer"
          onChange = {handleChange}
          />
          False
        </div>
        <button>Next</button>
      </form>
    </div>
  )
}
