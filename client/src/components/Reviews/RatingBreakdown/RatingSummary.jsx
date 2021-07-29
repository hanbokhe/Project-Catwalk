import React from 'react';
import axios from 'axios';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      avg: 0
    }
    this.getAvg = this.getAvg.bind(this)
  }

// 1: "4"
// 3: "4"
// 4: "2"
// 5: "2

  getAvg() {
    var count = 0
    var total = 0
    for(var key in this.state.ratings) {
      count += 1
      total += parseInt(key) * this.state.ratings[key]
    }
    // console.log(this.state)
    // console.log(count)
    // console.log(total)
  }

  componentDidMount() {
    this.setState((props) => ({
      ratings: props
    }))
    console.log(this.props)
  }


  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        <h2>RatingSummary</h2>
      </div>
    )
  }
}

// const RatingSummary = (props) => {
//   return (
//     <div>
//       {console.log(props)}
//       <h2>RatingSummary</h2>
//     </div>
//   )
// }

export default RatingSummary;