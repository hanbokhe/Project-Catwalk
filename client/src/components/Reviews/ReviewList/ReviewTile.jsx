/* eslint-disable camelcase */
/* eslint-disable no-undef */
import React from 'react';
import Photo from './Photo.jsx';
import Stars from '../Styles.jsx';
import axios from 'axios';
import TOKEN from '../../../../../server/config.js';
import styled from 'styled-components';
import moment from 'moment';

const ReviewTile_Container = styled.div `
display:flex;
flex-direction: column;
gap: 12px;
`;
const Start_Info_Container = styled.div`
padding-top: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between
`;

const Username_Date_Container = styled.div`
color: #777777;
`;

const Summary_div = styled.div`
font-weight: bold;
font-size: 26px;
`;

const ReviewBody_div = styled.div`
font-size: 18px;
`;

const Img = styled.img`
width: 193px;
height: 130px;
object-fit: scale-down;
`;


const Recommend_div = styled.div`
font-size: 18px;
`;

const Response_div = styled.div`

`;

const helpful_div = styled.div`

`;



class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      starRating: 4,
      date: 0,
      reviewSummary: 'abc',
      reviewBody: 'def',
      photos: [],
      recommend: true,
      reviwerName: 'username',
      response: 'internal response team',
      helpfulness: 0,
      voted: false
    };
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
    });
  }

  putHelpfullness(id) {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/helpful`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    });
  }

  handleVoteYes() {
    if (!this.state.voted) {
      // var countVote = this.state.helpfulness
      this.setState((state) => {
        return {
          helpfulness: state.helpfulness + 1,
          voted: true
        };
      });
    }
    this.putHelpfullness(this.props.review.review_id);
    return false;
  }

  handleReport() {
    var review_id = this.props.review.review_id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/report`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    });
  }

  render() {
    var dateStr = this.state.date;
    var formattedDate = moment(dateStr).format('MMM DD, YYYY');
    if (this.state.recommend) {
      var recommend = <Recommend_div> <span style={{color: 'green'}}>&#10003;</span>   I recommended this product</Recommend_div>;
    }
    return (
      <ReviewTile_Container>
        <Start_Info_Container>
          <Stars rating={`${this.state.starRating * 20}%`} />

          <Username_Date_Container>
            <div>{this.state.reviwerName}, {formattedDate}</div>
          </Username_Date_Container>
        </Start_Info_Container>

        <Summary_div>
          {this.state.reviewSummary}
        </Summary_div>

        <ReviewBody_div>
          {this.state.reviewBody}
        </ReviewBody_div>

        <div>
          Review Photo: {this.state.photos.map((photo, index) =>
            <Photo
              key={index}
              photo={photo}
            />

          )}
        </div>
        {recommend}
        <div>
          Response to Review: {this.state.response}
        </div>
        <div>
          Rating Helpfulness:{this.state.helpfulness}
          <div>
            Vote on: <a href="#1" onClick={this.handleVoteYes}>Yes</a> : <a href="#2" onClick={this.handleReport}>Report</a>
          </div>
        </div>

      </ReviewTile_Container>

    );
  }

}

export default ReviewTile;