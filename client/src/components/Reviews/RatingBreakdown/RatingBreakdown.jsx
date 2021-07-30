import React from 'react';
import axios from 'axios';
import Stars from '../Styles.jsx';
import RatingSummary from './RatingSummary.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 25193,
      average: 0,
      ratings: {},
      recommended: {},
      characteristic: {}
    }
    this.getMetaReviews = this.getMetaReviews.bind(this)
    this.getAvg = this.getAvg.bind(this)
  }

  getMetaReviews(product_id, callback) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: product_id
      }
    })
    .then((data) => {
      callback(data)
    })
    .catch((err) => console.log(err))
  }

  getAvg(data) {
    var ratings = data.data.ratings
    var count = 0
    var total = 0
    for(var key in ratings) {
      count += parseInt(ratings[key])
      total += (parseInt(key) * ratings[key])
    }
    this.setState({
      ratings: data.data.ratings,
      recommended: data.data.recommended,
      characteristic: data.data.characteristic,
      average: Math.round(total/count * 10)/ 10
    })
  }

  componentDidMount() {
    this.getMetaReviews(25193, this.getAvg)
  }

  render() {
    return (
      <div>
        <h1>RatingBreakdown</h1>
        {console.log(this.state)}
        <RatingSummary ratings={this.state.average}/>
      </div>
    )
  }
}

export default RatingBreakdown;
