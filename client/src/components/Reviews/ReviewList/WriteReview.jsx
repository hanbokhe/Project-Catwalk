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

  render() {
    return (
      <div>
        <h1>Write Review</h1>
        <div>
          overall rating {this.state.overallRating}
        </div>
        <div>
          recommended {this.state.recommended}
        </div>
        <div>
          characteristic {this.state.characteristic}
        </div>
        <div>
          summary {this.state.summary}
        </div>
        <div>
          review {this.state.review}
        </div>
      </div>
    )
  }
}

export default WriteReview;