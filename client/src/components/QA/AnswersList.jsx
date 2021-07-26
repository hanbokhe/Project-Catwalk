import React from 'react';import React from 'react';
import Answer from "./Answer.jsx";

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Answer />
        helpful button -
        report button -
        load more answers
      </div>

    )
  }
}

export default AnswersList;