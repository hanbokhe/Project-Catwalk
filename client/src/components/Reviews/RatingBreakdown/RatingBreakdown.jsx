import React from 'react';
import axios from 'axios';
import Stars from '../Styles.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 1.5,
      recommended: true,
      characteristic: []
    }
  }
}
