import React from 'react';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import styled from 'styled-components';

const A_div = styled.div`
width: 100%;
padding: 10px;
`

const A_title = styled.span`
font-weight: 600;
font-size: 16px;
`

const A_span = styled.span`
font-weight: 400;
font-size: 14px;
`


const Answer = ({answer}) => {
  return (
    <A_div>
      <A_title>
        A:
      </A_title>
      <> </>
      <A_span>
        {answer[1].body}
      </A_span>
      <> </>
      <Helpful/>
      <Report/>
    </A_div>
  )
}

export default Answer;