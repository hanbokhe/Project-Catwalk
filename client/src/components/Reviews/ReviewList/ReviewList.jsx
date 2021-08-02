/* eslint-disable camelcase */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
import WriteReview from './WriteReview.jsx';
import axios from 'axios';
import styled from 'styled-components';

const ReviewList_div = styled.div `
margin-left: 100px;
`;

const ReviewTiles_Container = styled.div `
height: 1000px;
margin-top: 20px;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
margin-bottom: 20px
`;

const Button = styled.button`
background-color: transparent;
font-size: 18px;
font-weight: bold;
width: 160px;
height: 50px;
&:hover {
  cursor: pointer;
}
`;

const Buttons_Container = styled.div `
gap: 15px;
display: flex;
flex-direction: row;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      display: [],
      reviewCount: 4
    };
    this.getReviews = this.getReviews.bind(this);
    this.handleMoreReview = this.handleMoreReview.bind(this);
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
        });
        // console.log("new state", this.state.reviewList)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    // console.log(this.props)
    this.getReviews(25192);
  }

  handleMoreReview() {
    var count = this.state.reviewCount;
    var display = this.state.reviewList.slice(0, count);
    this.setState((state) => {
      return {
        display: display,
        reviewCount: state.reviewCount + 2
      };
    });
  }

  render() {
    var toRender = [];
    if (this.state.reviewList.length > 2 &&
      this.state.display.length !== this.state.reviewList.length) {
      var MoreReview = <div>
        <Button onClick={this.handleMoreReview}>
          More Review
        </Button>
      </div>;
    }

    return (
      <ReviewList_div>
        <TotalSort />
        <ReviewTiles_Container>
          {this.state.display.map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />
          )}
        </ReviewTiles_Container>

        <Buttons_Container>
          {MoreReview}
          <Button>
            Add a review +
          </Button>
        </Buttons_Container>


        <WriteReview />

      </ReviewList_div>
    );
  }
}

export default ReviewList;