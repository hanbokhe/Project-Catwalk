import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';

function Reviews(props) {
  return (
    <div>
      <RatingBreakdown />
      <ReviewList currentProductId={props.currentProductId}/>
    </div>
  )
}

export default Reviews;