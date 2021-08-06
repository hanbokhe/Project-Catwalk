import React, {useState, useEffect} from 'react';
import Answer from "./Answer.jsx";
import styled from 'styled-components';

const A_container = styled.div`
width: 100%;
background-color: white;
padding-left: 20px;
`

const A_btn = styled.button`
background-color: transparent;
padding-bottom: 10px;
padding-left: 10px;
font-weight: bold;
font-size: 12px;
border: none;
`

const AnswersList = ({answers}) => {
  const [limit, setLimit] = useState(2);
  const [displayA, setDisplayA] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //lifecycle methods

  useEffect( () => {
    var moreA = answers.slice(0, limit);
    setDisplayA(moreA)
  }, [answers, limit])

  useEffect( () => {
    setLoaded(true)
  }, [displayA])

    //click handlers

    const loadMoreA = (e) => {
      e.preventDefault();
      setLimit(prevState => (prevState + 2))
    }

    const collapseA = (e) => {
      e.preventDefault();
      setLimit(2)
    }

  //render methods

  const Abutton = () => {

    if (answers.length === 0 || answers.length < 2) {
      return null;
    } else if (answers.length > 2 && limit <= answers.length) {
      return (
        <A_btn onClick={loadMoreA}>load more answers</A_btn>
      )
    } else if (limit >= answers.length) {
      return (
        <A_btn onClick={collapseA}>collapse answers</A_btn>
      )
    }
  }

  return (
    <A_container>
      {displayA.map(answer => (
          <Answer answer={answer} key={answer[0]}/>
        ))
      }
      {
        Abutton()
      }
    </A_container>
  )
}

export default AnswersList;