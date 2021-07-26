import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
import WriteReview from './WriteReview.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList : []
    }
  }
  render() {
    return (
      <div> Hello ReviewList
      <TotalSort />
      <ReviewTile />
      <WriteReview />
      </div>
    )
  }
}

export default ReviewList;