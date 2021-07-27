import React from 'react';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props.questionData)
  }

  render() {
    return (
    <Question />
    )
  }
}

export default QuestionsList;