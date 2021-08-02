import React from 'react';
import styled from 'styled-components';

const Header_div = styled.div`
background-color: black;
height: 80px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Logo = styled.img`
height: 100%;
object-fit: cover;
`

const Header = () => {
  return (
    <Header_div>
      <Logo src={`./alo_black.png`}/>
    </Header_div>
  )
}

export default Header;