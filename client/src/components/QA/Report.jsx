import React from 'react';
import styled from 'styled-components';

const Report_btn = styled.button`
background-color: transparent;
font-weight: 600;
font-size: 12px;
font-family: "Open Sans", sans-serif;
cursor: pointer;
align-items: center;
border: none;
outline: none;
&:hover {
  color: red;
}
`

const Report = () => {
  return (
    <Report_btn>Report</Report_btn>
  )
}

export default Report;