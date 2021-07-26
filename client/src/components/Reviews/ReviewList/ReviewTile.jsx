import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulCount: 0
    }
  }
  render() {
    return (
      <div>
        <h1> Review Tile</h1>
        <div>
          Star rating
        </div>
        <div>
          Date of review
        </div>
        <div>
          Review Summary
        </div>
        <div>
          Review Body
        </div>
        <div>
          Recommend
        </div>
        <div>
          Reviewer name
        </div>
        <div>
          Response to Review
        </div>
        <div>
          Rating Helpfulness
        </div>
        <div>
          <button>
            More Review
          </button>

          <button>
            Add a review +
          </button>
        </div>
      </div>

    )
  }
}

export default ReviewTile;