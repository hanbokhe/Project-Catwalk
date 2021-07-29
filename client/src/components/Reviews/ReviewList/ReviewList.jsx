import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
import WriteReview from './WriteReview.jsx';
import Stars from '../Styles.jsx';
import axios from 'axios';



class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList : [],
      display: [],
      reviewCount: 4
    }
    this.getReviews = this.getReviews.bind(this)
    this.handleMoreReview = this.handleMoreReview.bind(this)
  }

  getReviews(id) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews',
      params: {
        product_id: id
      }
    })
      .then((data) => {
        //console.log(data.data.results),
        this.setState({
          reviewList: data.data.results,
          display: data.data.results.slice(0, 2)
        })
        // console.log("new state", this.state.reviewList)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getReviews(25193)
  }

  handleMoreReview() {
    var count = this.state.reviewCount
    var display = this.state.reviewList.slice(0, count)
    this.setState({
      display: display,
      reviewCount: count += 2
    })


  }

  render() {
    var toRender = []
    if (this.state.reviewList.length) {
      toRender = (
        <div>
          <h1>Hello ReviewList</h1>
          <TotalSort />
          {this.state.display.map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />
          )}
          <h1>Buttons</h1>
          <div>
            <button onClick={this.handleMoreReview}>
              More Review
            </button>

            <button>
              Add a review +
            </button>
          </div>

          <WriteReview />

        </div>
      )
    } else {
      toRender = (
        <div>
          <h1>Hello ReviewList</h1>
          <TotalSort />
          {this.state.display.map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />
          )}
          <h1>Buttons</h1>

          <WriteReview />

        </div>
      )
    }
    return toRender
  }
}

export default ReviewList;