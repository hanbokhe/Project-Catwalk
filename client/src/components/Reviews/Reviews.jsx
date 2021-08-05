import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`;
const ReViewsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: row;
justify-content: space-between;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.filterStar = this.filterStar.bind(this);
    this.state = {
      filterStar: [0, false]
    };
  }

  filterStar(star) {
    var isClick = this.state.filterStar[1];
    console.log(isClick);
    this.setState({
      filterStar: [star, !isClick]
    });
  }

  render() {
    return (
      <Container>
        <p>RATING & REVIEWS</p>
        <ReViewsContainer>
          <RatingBreakdown currentProductId={this.props.currentProductId} filterStar={this.filterStar}/>
          <ReviewList filterStar={this.state.filterStar}currentProductId={this.props.currentProductId}/>
        </ReViewsContainer>
      </Container>
    );
  }
}

export default Reviews;