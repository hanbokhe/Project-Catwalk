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
font-size: 16px;
`;

const Summary_div = styled.div`
font-weight: bold;
font-size: 24px;
`;

const ReviewBody_div = styled.div`
font-size: 16px;
`;

const Photo_div = styled.div`
display: flex;
flex-direction: row;
`;

const Recommend_div = styled.div`
font-size: 16px;
`;

const Response_Container = styled.div`
display: flex;
background-color: lightgray;
height:80px;
align-items: center
`;

const ResponseText_Container = styled.div`
padding-left: 20px;
font-size: 16px;
display: flex;
flex-direction: column;
gap: 12px;
`;

const Helpful_div = styled.div`
gap: 12px;
display: flex;
flex-direction: row;
font-size: 16px;
`;

const Yes_Container = styled.div`
.yes {
  text-decoration: none;
  font-weight: bold;
  color: black;
};

&:hover .yes {
  color: green;
}
`;

const Report_Container = styled.div`
.report {
  text-decoration: none;
  font-weight: bold;
  color: black
};

&:hover .report {
  color: red;
}
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

        <Photo_div>
          {this.state.photos.map((photo, index) =>
            <Photo
              key={index}
              photo={photo}
            />
          )}
        </Photo_div>

        {recommend}

        <Response_Container>
          <ResponseText_Container>
            <div>
              <span style={{color: 'black', fontWeight: 'bold'}}>Response:</span>
            </div>
            <div>
              {this.state.response} This is a reponse place holder
            </div>
          </ResponseText_Container>

        </Response_Container>

        <Helpful_div>
          <div>Helpful?</div>

          <Yes_Container>
            <a className='yes' href="#1" onClick={this.handleVoteYes}>Yes</a> ({this.state.helpfulness})
          </Yes_Container>

          <div>
            |
          </div>

          <Report_Container>
            <a className="report" href="#2" onClick={this.handleReport}>Report</a>
          </Report_Container>

        </Helpful_div>

      </ReviewTile_Container>

    );
  }

}

export default ReviewTile;