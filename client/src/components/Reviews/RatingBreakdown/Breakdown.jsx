import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

// var Breakdown = ({breakdowns}) => {
//   if (breakdowns !== undefined) {
//     return (
//       <div>
//         {breakdowns.map((breakdown, index) =>
//           <Bar
//             key = {index}
//             breakdown = {breakdown}
//           />
//         )}
//       </div>
//     );
//   } else {
//     return (
//       <div></div>
//     );
//   }
// };

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakdowns: props.breakdowns
    };
  }

  static getDerivedStateFromProps(props, newstate) {
    return {
      breakdowns: props.breakdowns
    };
  }

  render() {
    if (this.state.breakdowns !== undefined) {
      return (
        <div>
          {this.state.breakdowns.map((breakdown, index) =>
            <Bar filterStar={this.props.filterStar}
              key = {index}
              breakdown = {breakdown}
            />
          )}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default Breakdown;