import React from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';

class QAApp extends React.component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>'QAApp says hello'</p>
        <Search />
        <QuestionsList />
        <button> More Questions</button>
        <button> ask a question </button>
      </div>
    );
  }
}

export default QAApp;