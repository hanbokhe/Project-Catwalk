import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reviews from '../../src/components/Reviews/Reviews.jsx';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../src/components/App.jsx';

// test('hello world', () => {
//   render(<p> Hello Jest!</p>);
//   expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Reviews />, div);
// });

it('renders app correctly', async () => {
    renderer.create(<App />);
  });

it('renders review crashing', async () => {
  await renderer.create(<Reviews currentProductId={25170}/>);
});

// describe('reviews component', () => {
//   // beforeAll(async () => await render(<Reviews />));
//   // afterEach(cleanup);
//   // test('hello world', () => {
//   //   render(<p> Hello Jest!</p>);
//   //   expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
//   // });
//   // it ('renders without crashing', async () => {
//   //   await render(<Reviews />);
//   // });
//   it('renders app correctly', async () => {
//     renderer.create(<App />);
//   });

//   it('renders review crashing', async () => {
//     await renderer.create(<Reviews currentProductId={25170}/>);
//   });
// });
