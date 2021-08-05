/* eslint-disable camelcase */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
import WriteReview from './WriteReview.jsx';
import axios from 'axios';
import styled from 'styled-components';

const ReviewList_div = styled.div `
margin-left: 80px;
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
      masterList: [],
      reviewList: [],
      display: [],
      reviewCount: 4,
      // filterStar: [["0", false]]
      filterStar:["0", false]

    };
    this.getReviews = this.getReviews.bind(this);
    this.handleMoreReview = this.handleMoreReview.bind(this);
    this.filterReview = this.filterReview.bind(this);
    this.buttonRender = this.buttonRender.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // var rating = props.filterStar[0];
    // var prevFilterStar = state.filterStar;

    // var isRemove = false;
    // for (var i = 0; i < prevFilterStar.length; i++) {
    //   if ((prevFilterStar[i][0]) === rating) {
    //     prevFilterStar.splice(i, 1);
    //     isRemove = true;
    //   }
    // }
    // if (!isRemove) {
    //   prevFilterStar.push([rating, props.filterStar[1]]);
    // }

    // return {
    //   filterStar: prevFilterStar
    // };
    return {
      filterStar: props.filterStar
    };
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

  filterReview(arrayReview, star, callback) {
    console.log("star", star);
    var toReturn = [];
    for (var i = 0; i < arrayReview.length; i++) {
      if (arrayReview[i].rating === parseInt(star)) {
        toReturn.push(arrayReview[i]);
      }
    }

    callback(toReturn);
  }

  getReviews(id) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews',
      params: {
        product_id: id
      }
    })
      .then(({data}) => {
        this.setState({
          masterList: data.results,
          reviewList: data.results,
          display: data.results.slice(0, 2)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  componentDidUpdate(prevProps, prevState) {
    var filterStarChange = this.state.filterStar[0] !== prevState.filterStar[0];
    var clickChange = this.state.filterStar[1] !== prevState.filterStar[1];
    // var isStarClick = this.state.starClick !== prevState.starClick;
  //   console.log("state", this.state.filterStar);
  //   console.log("prev", prevState.filterStar);
  //   var addFilterStar = this.state.filterStar.length !== prevState.filterStar.length;
  //   console.log(prevProps);
  //   console.log(addFilterStar);
  //   var recentStar = this.state.filterStar.slice(-1)[0][0];
  //   console.log("recentStar", recentStar);
  //   if (addFilterStar) {
  //     this.filterReview(this.state.masterList, recentStar, (data) => {
  //       this.setState({
  //         reviewList: prevState.filterStar.push(...data),
  //         display: prevState.filterStar.push(...data).slice(0, 2)
  //       });
  //     });
  //   }
  // }


    if (filterStarChange) {

      this.filterReview(this.state.masterList, this.state.filterStar[0], (data) => {
        this.setState({
          reviewList: data,
          display: data.slice(0, 2)
        });
      });
    } else if (!filterStarChange && clickChange) {
      console.log("Did I click?");
      this.setState({
        reviewList: this.state.masterList,
        display: this.state.masterList.slice(0, 2)
      });
    }

  }


  componentDidMount() {
    this.getReviews(this.props.currentProductId);
  }

  buttonRender() {
    if (this.state.reviewList.length > 2 &&
    this.state.display.length !== this.state.reviewList.length) {
      return (
        <Button onClick={this.handleMoreReview}>
          More Review
        </Button>
      );
    }
  }

  render() {
    return (
      console.log(this.state.filterStar),
      <ReviewList_div>
        <TotalSort />
        <ReviewTiles_Container>
          {this.state.display.map((review, index) => (
            <ReviewTile key={Math.random() * 10000 }review={review}/>
          ))}
        </ReviewTiles_Container>

        <Buttons_Container>
          {this.buttonRender()}
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