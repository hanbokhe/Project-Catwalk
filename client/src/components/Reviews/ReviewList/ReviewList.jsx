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
      reviewList : []
    }
    this.getReviews = this.getReviews.bind(this)
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
          reviewList: data.data.results
        })
        // console.log("new state", this.state.reviewList)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getReviews(25192)
  }

  render() {
    return (
      <div>
        <h1>Hello ReviewList</h1>
      <TotalSort />
        {this.state.reviewList.map((review, index) =>
        <ReviewTile
          key = {index}
          review = {review}
        />
      )}
      <WriteReview />
      </div>
    )
  }
}

export default ReviewList;