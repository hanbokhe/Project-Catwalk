import React from 'react';
import styled from 'styled-components';

const Bar_container = styled.div `
width: 65%;
background-color: #f1f1f1;
text-align: center;
color: black;
height: 10px;
`;

const OneBar_container = styled.div `
display: flex;
flex-direction:row;
align-items: center;
padding-bottom: 8px;
`;

const SideBar_div = styled.div `
padding-right: 8px;
`;

const RightBar_div = styled.div `
padding-left: 8px;
`;

var Bar = ({breakdown}) => {
  const Bar_div = styled.div `
  width: ${breakdown[2]}%;
  height: 10px;
  background-color: #04AA6D
  `;
  return (
    <OneBar_container>
      <SideBar_div> {`${breakdown[0]} stars`}</SideBar_div>
      <Bar_container>
        <Bar_div>
        </Bar_div>
      </Bar_container>
      <RightBar_div>
        {`${breakdown[1]}`}
      </RightBar_div>
    </OneBar_container>
  );
};

export default Bar;