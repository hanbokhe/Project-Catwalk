import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reviews from '../../src/components/Reviews/Reviews.jsx';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../src/components/App.jsx';


it('renders app correctly', async () => {
    renderer.create(<App />);
  });

it('renders review crashing', async () => {
  await renderer.create(<Reviews currentProductId={25170}/>);
});


