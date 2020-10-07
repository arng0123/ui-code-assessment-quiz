import React, {useState} from 'react'

export default function Boolean () {
const [selectedAnswer, setselectedAnswer] = useState()
const [isCorrect, setisCorrect] = useState(false)

  return(
    <div>
      THIS IS A BOOL Q
      <form>
        <div>
        <label>
          <input 
          type = "radio"
          />
          True
        </label>
        </div>

        <div>
        <label>
          <input 
          type = "radio"
          />
          False
        </label>
        </div>
        <button>Next</button>
      </form>
    </div>
  )
}
