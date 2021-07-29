import React from 'react';
import Photo from './Photo.jsx';
import Stars from '../Styles.jsx';
import axios from 'axios';
import TOKEN from '../../../../../server/config.js'

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      starRating: 4,
      date: 0,
      reviewSummary: "abc",
      reviewBody: "def",
      photos: [],
      recommend: true,
      reviwerName: "username",
      response: "internal response team",
      helpfulness: 0,
      voted: false
    }
    this.handleVoteYes = this.handleVoteYes.bind(this);
    this.putHelpfullness = this.putHelpfullness.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.review.review_id,
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

  putHelpfullness(id) {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/helpful`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    })
  }

  handleVoteYes() {
    if (!this.state.voted) {
      // var countVote = this.state.helpfulness
      this.setState((state, props) => {return {
        helpfulness: state.helpfulness + 1,
        voted: true
      }})
    }
    var review_id = this.props.review.review_id
    this.putHelpfullness(review_id)
    return false
  }

  handleReport() {
    var review_id = this.props.review.review_id
    console.log(this.props)
    console.log(review_id)
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/report`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    })
  }

  render() {
    return (
      <div>
        <h1> Review Tile</h1>
        <div>
          rating review: {this.state.starRating}
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
          Rating Helpfulness:{this.state.helpfulness}
          <div>
            Vote on: <a href="#1" onClick={this.handleVoteYes}>Yes</a> : <a href="#2" onClick={this.handleReport}>Report</a>
          </div>
        </div>

      </div>

    )
  }
}

export default ReviewTile;