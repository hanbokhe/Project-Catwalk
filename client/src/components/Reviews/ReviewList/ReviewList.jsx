import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
// import Add from Add.jsx;


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
      </div>
    )
  }
}

export default ReviewList;