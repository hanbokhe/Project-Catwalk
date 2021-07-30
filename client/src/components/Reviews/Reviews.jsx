import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 70%;
display: flex;
flex-direction: column;
`

function Reviews(props) {
  return (
    <Container>
      <RatingBreakdown />
      <ReviewList currentProductId={props.currentProductId}/>
    </Container>
  )
}

export default Reviews;