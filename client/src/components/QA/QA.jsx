import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import styled from 'styled-components';

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
      console.log('this is data from server', data);
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
    <Container>
      <h4>Questions and Answers</h4>
      <Accordian>
        {loaded ?
          <QuestionsList questions={sortedQuestions}/>
          : <div>QA Loading</div>
        }
      </Accordian>
    </Container>
  )

}

export default QA;

/*
const questionData = {
  product_id: '5',
  results: [{
    question_id: 37,
    question_body: 'Why is this product cheaper here than other sites?',
    question_date: '2018-10-18T00:00:00.000Z',
    asker_name: 'williamsmith',
    question_helpfulness: 4,
    reported: false,
    answers: {
      68: {
        id: 68,
        body: 'We are selling it here without any markup from the middleman!',
        date: '2018-08-18T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 4,
        photos: []
      }
    }
  }]
}
{
  question_id: 38,
  question_body: 'How long does it last?',
  question_date: '2019-06-28T00:00:00.000Z',
  asker_name: 'funnygirl',
  question_helpfulness: 2,
  reported: false,
  answers: {
    70: {
      id: 70,
      body: 'Some of the seams started splitting the first time I wore it!',
      date: '2019-11-28T00:00:00.000Z',
      answerer_name: 'sillyguy',
      helpfulness: 6,
      photos: [],
    },
    78: {
      id: 78,
      body: '9 lives',
      date: '2019-11-12T00:00:00.000Z',
      answerer_name: 'iluvdogz',
      helpfulness: 31,
      photos: [],
    },
  }
}
*/