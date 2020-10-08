import React, {useState} from 'react'

export default function Text ( {question, answerSubmit}) {
  const [answer, setAnswer] = useState('')

  //handle change function
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!answer){
      return (
        alert("You need to input an answer!")
      )
    }

    answer === question.correct_answer ? answerSubmit(true) : answerSubmit(false)

    setAnswer('')
  }

  return(
    <div>
      {question.question}
      <form onSubmit={handleSubmit}>
          <div>
           <input 
            type = "text" 
            onChange={handleChange} 
            className="text-input"
            />
          </div>
          <br/>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}
