import React from 'react';

class TotalSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReview: 248
    };
  }

  render() {
    return (
      <div>
        <h1>Total Sort</h1>
        <b>{this.state.totalReview} reviews, sorted by relevance</b>

      </div>
    );
  }
}

export default TotalSort;