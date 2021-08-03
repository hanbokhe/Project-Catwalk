import React from 'react';
import styled from 'styled-components';

const Helpful_btn = styled.button`
background-color: transparent;
font-weight: 600;
font-size: 12px;
font-family: "Open Sans", sans-serif;
cursor: pointer;
align-items: center;
border: none;
outline: none;
&:hover {
  color: green;
}
`

const Helpful = () => {
  return (
    <Helpful_btn>Helpful?</Helpful_btn>
  )
}

export default Helpful;