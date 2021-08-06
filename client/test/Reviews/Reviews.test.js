import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reviews from '../../src/components/Reviews/Reviews.jsx';
import ReactDOM from 'react-dom';

test('hello world', () => {
  render(<p> Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews currentProductId={25173}/>, div);
});