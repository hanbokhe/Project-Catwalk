import React from 'react';
import Photo from './Photo.jsx';
import Stars from '../Styles.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: 4,
      date: 0,
      reviewSummary: "abc",
      reviewBody: "def",
      photos: [],
      recommend: true,
      reviwerName: "username",
      response: "internal response team",
      helpfulness: 0
    }
  }

  componentDidMount() {

    this.setState({
      starRating: this.props.review.rating,
      date: this.props.review.date,
      reviewSummary: this.props.review.summary,
      reviewBody: this.props.review.body,
      photos: this.props.review.photos,
      recommend: this.props.review.recommend,
      reviwerName: this.props.review.reviewer_name,
      response: this.props.review.response,
      helpfulness: this.props.review.helpfulness

    })
  }


  render() {
    return (
      <div>
        <h1> Review Tile</h1>
        <div>
          <h1> star testing</h1>
          {/* <div class="stars" style="--rating: 2.3;" aria-label="rating of the product" */}

        </div>
        <div>
          rating review: {this.state.starRating}
          {console.log(`${this.state.starRating * 10}%`)}

          <Stars rating={`${this.state.starRating * 20}%`} />
        </div>
        <div>
          Date of review: {this.state.date}
        </div>
        <div>
          Review Summary: {this.state.reviewSummary}
        </div>
        <div>
          Review Body: {this.state.reviewBody}
        </div>
        <div>
          Review Photo: {this.state.photos.map((photo,index) => <Photo
              key={index}
              photo={photo}
              />
          )}
        </div>
        <div>
          Recommend: {this.state.recommend ? "yes" : "no"}
        </div>
        <div>
          Reviewer name: {this.state.reviwerName}
        </div>
        <div>
          Response to Review: {this.state.response}
        </div>
        <div>
          Rating Helpfulness: {this.state.helpfulness}
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