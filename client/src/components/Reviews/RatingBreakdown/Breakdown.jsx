import React from 'react';
import styled from 'styled-components';

const Bar_container = styled.div `
width: 65%;
background-color: #f1f1f1;
text-align: center;
color: black;
height: 12px;
`;

const OneBar_container = styled.div `
display: flex;
flex-direction:row;
align-items: center;
`;

const SideBar_div = styled.div `
padding-right: 8px;
`;

const RightBar_div = styled.div `
padding-left: 8px;
`;


var Breakdown = (props) => {
  const Bar_div5 = styled.div `
  width: ${props.breakdown.average * 10}%;
  height: 12px;
  background-color: #04AA6D
  `;

  const Bar_div4 = styled.div `
  width: ${props.breakdown.average * 10}%;
  height: 12px;
  background-color: #04AA6D
  `;

  return (
    <div>
      {console.log(props.breakdown)}
      <h1>breakdown</h1>
      <OneBar_container>
        <SideBar_div> 5 stars</SideBar_div>
        <Bar_container>
          <Bar_div5>
          </Bar_div5>
        </Bar_container>
        <RightBar_div>
          {/* {ratings['5']} */}
        </RightBar_div>
      </OneBar_container>

      <OneBar_container>
        <SideBar_div> 4 stars</SideBar_div>
        <Bar_container>
          <Bar_div4>
          </Bar_div4>
        </Bar_container>
        <RightBar_div>
          {/* {ratings['4']} */}
        </RightBar_div>
      </OneBar_container>

      <div>
        {/* 3 stars: {ratings['3']} */}
      </div>
      <div>
        {/* 2 stars: {ratings['2']} */}
      </div>
      <div>
        {/* 1 stars: {ratings['1']} */}
      </div>
    </div>

  );
};

export default Breakdown;