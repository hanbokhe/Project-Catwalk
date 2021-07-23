import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: 0,
      recommended: false,
      characteristic: 4,
      summary: "summary",
      review: "write your review here",

    }
  }
}