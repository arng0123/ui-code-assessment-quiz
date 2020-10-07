import React, {useState} from 'react'

export default function Text ( {question, answerSubmit}) {
  const [answer, setAnswer] = useState('')

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    answer === question.correct_answer ? answerSubmit(true) : answerSubmit(false)

    setAnswer('')
  }

  return(
    <div>
      {question.question}
      <form onSubmit={handleSubmit}>
          <input type = "text" onChange={handleChange}/>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}
