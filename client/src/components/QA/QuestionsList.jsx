import React from 'react';
import Question from './Question.jsx';
import styled from 'styled-components';



const QuestionsList = ({questions}) => {
  return (
    <>
      { questions.map(question => (
        <Question question={question} key={question.question_id}/>
      ))}
    </>
  )
}

export default QuestionsList;