import React from 'react';
import Answer from "./Answer.jsx";
import styled from 'styled-components';

const A_container = styled.div`
width: 100%;
background-color: white;
padding-left: 20px;
`

const MoreA = styled.button`
background-color: transparent;
padding-left: 10px;
font-weight: bold;
font-size: 12px;
border: none;
`

const AnswersList = ({answers}) => {

  return (
    <A_container>
      {answers.map(answer => (
          <Answer answer={answer}/>
        ))
      }
      { answers.length > 4 ?
        <MoreA>load more answers</MoreA>
      : null
      }
    </A_container>
  )
}

export default AnswersList;