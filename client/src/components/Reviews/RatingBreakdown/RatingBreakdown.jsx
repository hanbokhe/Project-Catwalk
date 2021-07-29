import React from 'react';
import axios from 'axios';
import Stars from '../Styles.jsx';
import RatingSummary from './RatingSummary.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 25193,
      ratings: {},
      recommended: {},
      characteristic: {}
    }
    this.getMetaReviews = this.getMetaReviews.bind(this)
  }

  getMetaReviews(product_id) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: product_id
      }
    })
    .then((data) => {
      this.setState({
        ratings: data.data.ratings,
        recommended: data.data.recommended,
        characteristic: data.data.characteristic
      })
    })
    .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getMetaReviews(25193)
  }

  render() {
    return (
      <div>
        <h1>RatingBreakdown</h1>
        {console.log(this.state)}
        <RatingSummary ratings={this.state.ratings}/>
      </div>
    )
  }
}

export default RatingBreakdown;
