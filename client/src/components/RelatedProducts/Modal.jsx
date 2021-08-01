import React, {useState, useEffect, useContext} from 'react';

import styled from 'styled-components';

const Container = styled.div`
position: absolute;
width: 40%;
height: 30%;
padding: 10px;
z-index: 2;
background-color: white;
box-shadow: 0px 0px 10px 1px grey;
animation: popup 0.25s;
`

const Modal = ({modalInfo}) => {

  return (
    <Container>
      Comparing
    </Container>
  )
}

export default Modal;