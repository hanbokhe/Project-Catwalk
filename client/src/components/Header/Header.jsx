import React from 'react';
import styled from 'styled-components';

const Header_div = styled.div`
background-color: black;
height: 80px;
width: 2020px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Logo = styled.img`
height: 80px;
width: 111.89px;
object-fit: cover;
`

const Header = () => {
  return (
    <Header_div>
      <Logo src={`./nike_logo.jpg`} alt={"logo"}/>
    </Header_div>
  )
}

export default Header;