import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`;
const ReViewsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: row;
justify-content: space-between;
width: 100%;
`;

var Reviews = (props) => {
  return (
    <Container>
      <p>RATING & REVIEWS</p>
      <ReViewsContainer>
        <RatingBreakdown />
        <ReviewList currentProductId={props.currentProductId}/>
      </ReViewsContainer>
    </Container>
  );
};

export default Reviews;