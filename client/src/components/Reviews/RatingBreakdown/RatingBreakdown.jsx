/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import Stars from '../Styles.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 25193,
      average: 0,
      ratings: {},
      recommended: 0,
      characteristics: {}
    };
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.getAvg = this.getAvg.bind(this);
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
        callback(data);
      })
      .catch((err) => console.log(err));
  }

  getAvg(data) {
    var ratings = data.data.ratings;
    var count = 0;
    var total = 0;
    for (var key in ratings) {
      count += parseInt(ratings[key]);
      total += (parseInt(key) * ratings[key]);
    }

    var countTrue = parseInt(data.data.recommended.true);
    var countFalse = parseInt(data.data.recommended.false);

    this.setState({
      ratings: data.data.ratings,
      recommended: Math.round(countTrue / (countFalse + countTrue) * 100),
      characteristics: data.data.characteristics,
      average: Math.round(total / count * 10) / 10,
      count: count
    });
  }


  componentDidMount() {
    this.getMetaReviews(25193, this.getAvg);
  }

  render() {
    return (
      <div>
        <h1>RatingBreakdown</h1>
        <h2>recommended: {this.state.recommended}% </h2>
        <h2>Total Rating: {this.state.count}</h2>
        <h2>avg rating: {this.state.average}</h2>
        <Breakdown ratings={this.state.ratings}/>
        <Characteristics characteristics={this.state.characteristics} />
      </div>
    );
  }
}

export default RatingBreakdown;
