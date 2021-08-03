import React, {useState, useEffect} from 'react';
import AnswersList from "./AnswersList.jsx";
import styled from 'styled-components';

const Q_div = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const Q_title = styled.span`
padding: 10px;
font-size: 16px;
font-weight: bold;
`

const Add_span = styled.span`
padding: 10px;
font-size: 12px;
font-weight: bold;
&:hover {
  color: green;
}
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
      <Q_div>
        <Q_title>
          Q: <> </> {question.question_body}
        </Q_title>
        <Add_span>
          + Add Answer
        </Add_span>
      </Q_div>
      <AnswersList answers={sortedAnswers}/>
    </>
  )

}

export default Question;