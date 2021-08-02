import React, {useState, useEffect} from 'react';
import AnswersList from "./AnswersList.jsx";
import styled from 'styled-components';


const Q_title = styled.span`
font-weight: 600;
font-size: 16px;
padding: 10px;
`

const Question = ({question}) => {
  const[answers, setAnswers] = useState([])
  const[sortedAnswers, setSortedAnswers] = useState([])

  useEffect(() => {
    //console.log('question: ', question);
    if(question.answers) {
      setAnswers(Object.entries(question.answers))
    }
  }, [question])

  useEffect(() => {
    var sortedA = answers.sort((a,b) => b.helpfulness - a.helpfulness)
    setSortedAnswers(sortedA)
  }, [answers])

  return (
    <>
      <Q_title>
        Q: <> </> {question.question_body}
      </Q_title>
      <AnswersList answers={sortedAnswers}/>
    </>
  )

}

export default Question;