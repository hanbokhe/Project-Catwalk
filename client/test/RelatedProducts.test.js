import React from 'react';
import {render, screen} from '@testing-library/react';
import RelatedProductsTest from './RelatedProductsTest';

it(' should render a form to the page', () => {
  render(<RelatedProducts/>)
  expect(screen.getByRole('form')).toBeInTheDocument();
})

it(' should render input fields', () => {
  render(<RelatedProducts/>)
  expect(screen.getByLabelText('Item')).toBeInTheDocument();
  expect(screen.getByLabelText('Quantity')).toBeInTheDocument();
})

it(' should render text typed by user, () => {
  render(<RelatedProducts/>)
  const itemInput = screen.getByLabelText('Item');
  const quantityInput = screen.getByLabelText('Quantity');

  userEvent.type(itemInput, 'test');
  expect(itemInput).toHaveValue('test');

  userEvent.type(quantityInput, '21');
  expect(quantityInput).toHaveValue('21');
})

it(' should render text typed by user, () => {
  render(<RelatedProducts/>)
  const itemInput = screen.getByLabelText('Item');
  const quantityInput = screen.getByLabelText('Quantity');

  userEvent.type(quantityInput, '2q1');
  expect(quantityInput).toHaveValue(21);
})