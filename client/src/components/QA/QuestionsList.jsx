import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import styled from 'styled-components';

const Btn_div = styled.div`
width: 100%;
background-color: white;
display: flex;
flex-direction: row;
`

const Q_btn = styled.button`
background-color: white;
width: 120px;
padding: 5px;
font-size: 10px;
margin: 5px;
font-weight: bold;
`


const QuestionsList = ({questions}) => {
  const [limit, setLimit] = useState(2);
  const [displayQ, setDisplayQ] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //lifecycle methods

  useEffect( () => {
    var moreQ = questions.slice(0, limit);
    setDisplayQ(moreQ)
  }, [questions, limit])

  useEffect( () => {
    setLoaded(true)
  }, [displayQ])



  //click handlers

  const loadMoreQ = (e) => {
    e.preventDefault();
    setLimit(prevState => (prevState + 2))
  }

  const collapseQ = (e) => {
    e.preventDefault();
    setLimit(2)
  }

  //render methods

  const Qbutton = () => {

    if (questions.length === 0 || questions.length < 2) {
      return null
    } else if (questions.length > 2 && limit <= questions.length) {
      return (
        <Q_btn onClick={loadMoreQ}>
          More Questions
        </Q_btn>
      )
    } else if (limit >= questions.length) {
      return (
        <Q_btn onClick={collapseQ}>
          Collapse Questions
        </Q_btn>
      )
    }
  }

  return (
    <>
      {
        loaded ?
          displayQ.map(question => (
            <Question question={question} key={question.question_id}/>
          ))
        : null
      }
      <Btn_div>
        {
          Qbutton()
        }
        <Q_btn>Add Question +</Q_btn>
      </Btn_div>
    </>
  )
}

export default QuestionsList;