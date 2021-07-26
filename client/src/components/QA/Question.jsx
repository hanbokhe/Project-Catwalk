import React from 'react';
import AnswersList from "./AnswersList.jsx";

class Question extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Q: -
        A: -
        helpful question button/count -
        <AnswersList />
      </div>
    )
  }
}

export default Question;