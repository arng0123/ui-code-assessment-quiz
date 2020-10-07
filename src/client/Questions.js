import React, {useState, useEffect} from 'react';
import Summary from '../client/Summary'
import Multiple from '../client/Multiple'
import Text from '../client/Text'
import Boolean from '../client/Boolean'

export default function Questions () {
  const [questions, setQuestions] = useState([])
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [questionNum, setQuestionNum]=useState(0)

  //Set limit for demo purposes
  const questionMax = 2


//upon render set questions to state
  useEffect(() => {
    try {
      async function getQ () {
        const response = await fetch ('http://localhost:4000/api/questions')
        console.log(response)
        const results = await response.json()
        console.log(results.results)
        shuffleQ(results.results)
      }

      getQ()

    } catch (error) {
      console.error(error)
    }
  },[])

// ----Helper Functions ----

//randomize the questions 
  const shuffleQ = (questions) => {
    let start = 0
    let shuffledQ = []

    while (start < questionMax) {
      shuffledQ.push(questions[Math.floor(Math.random() * Math.floor(questions.length-1))])
      start++
    }
    console.log(shuffledQ)
    setQuestions(shuffledQ)
  }


  //function for updating state with correct, wrong, and questionNum for every answer submission
    const answerSubmit = (answer) => {
      setQuestionNum(questionNum++)

      if(answer){
        setCorrect(correct++)
      } else {
        setWrong(wrong++)
      }
    }


  //function for conditionally rendering question types
  const questionType = (question) => {
    if(question.type === "multiple"){
      return <Multiple/>
    }

    if(question.type === "boolean") {
      return <Boolean />
    }

    if(question.type === "text"){
      return <Text />
    }
  }


    return(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {questions.length === 0 ? "Loading...":
          (questionNum === questionMax ? <Summary /> : questionType(questions[questionNum]) )}
      </div>
    )

  };


