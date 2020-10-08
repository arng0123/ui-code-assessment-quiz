import React, {useState, useEffect} from 'react';
import Summary from '../client/Summary'
import Multiple from '../client/Multiple'
import Text from '../client/Text'
import Boolean from '../client/Boolean'

export default function Questions () {
   let [questions, setQuestions] = useState([])
   let [correct, setCorrect] = useState(0)
   let [wrong, setWrong] = useState(0)
   let [questionNum, setQuestionNum]=useState(0)

  //Set limit for demo purposes
  const questionMax = 4


//upon render set questions to state
  useEffect(() => {
    try {
      async function getQ () {
        const response = await fetch ('http://localhost:4000/api/questions')
        const results = await response.json()
        shuffleQ(results.results, questionMax)
      }

      getQ()

    } catch (error) {
      console.error(error)
    }
  },[])

// ----Helper Functions ----

//randomize the questions 
  const shuffleQ = (questions, max) => {
    let start = 0
    let shuffledQ = []
    let indices = [] //used for duplication

    while (start < max) {
      let idx = Math.floor(Math.random() * Math.floor(questions.length-1))
      if(!indices.includes(idx)){
        shuffledQ.push(questions[idx])
        start++
      }
    }
    setQuestions(shuffledQ)
  }


  //function for updating state with correct, wrong, and questionNum for every answer submission
    const answerSubmit = (answer) => {
      setQuestionNum(questionNum+=1)

      if(answer){
        setCorrect(correct+=1)
      } else {
        setWrong(wrong+=1)
      }
    }


  //function for conditionally rendering question types
  const questionType = (question) => {
    if(question.type === "multiple"){
      return <Multiple question={question} answerSubmit = {answerSubmit}/>
    }

    if(question.type === "boolean") {
      return <Boolean question={question} answerSubmit = {answerSubmit}/>
    }

    if(question.type === "text"){
      return <Text question={question} answerSubmit = {answerSubmit}/>
    }
  }

  //loader 
    if(questions.length ===0) {
      return <div>Loading...</div>
    }  
  
    return(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:"20em", width:"30em" }}>
        { (questionNum === questionMax ? <Summary questionNum = {questionNum} correct = {correct} wrong = {wrong}/> : questionType(questions[questionNum])) }
      </div>
    )

  };


