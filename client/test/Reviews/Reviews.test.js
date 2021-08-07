import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reviews from '../../src/components/Reviews/Reviews.jsx';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../src/components/App.jsx';
import RatingBreakdown from '../../src/components/Reviews/RatingBreakdown/RatingBreakdown.jsx';
// import ReviewList from '../../src/components/


it ('renders review correctly', () => {
  renderer.create(<Reviews currentProductId={25170}/>);
});

it('it should render RatingBreakdown Component', () => {
  render(<RatingBreakdown />);
});

// it('it should render Review Component', () => {
//   render()
// })

//// testing remove pem
/// another test
/// can push?