import React, {useState, useEffect, useContext, lazy, Suspense} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loading from '../Loading.jsx';
//import QuestionsList from './QuestionsList.jsx';

const QuestionsList = lazy(() => import('./QuestionsList.jsx'));


const Container = styled.div`
width: 60%;
`

const Accordian = styled.div`
width: 100%;
background-color: whitesmoke;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: flex-start;
border: none;
transition: background-color 0.6s ease;
`

const QA = ({currentProductId}) => {
  const [questions, setQuestions] = useState([]);
  const [sortedQuestions, setSorted] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`/qa/questions/${currentProductId}`)
    .then(({data}) => {
      setQuestions(data.results);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [])

  useEffect(() => {
    var sortedQuestions = questions.sort((a,b) => b.question_helpfulness - a.question_helpfulness )
    setSorted(sortedQuestions);
    setLoaded(true);
  }, [questions])

  useEffect (
    () => {

    }, [sortedQuestions])

  return (
    <Suspense fallback={<Loading/>}>
      <Container>
        <h4>Questions and Answers</h4>
        <Accordian>
          {loaded ?
            <QuestionsList questions={sortedQuestions}/>
            : <div>QA Loading</div>
          }
        </Accordian>
      </Container>
    </Suspense>
  )
}

export default QA;