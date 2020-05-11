import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// TO Test
// Show one page of the form at a time.
// Show the current page position of the form.
// Validate the input fields upon submission of each page.
// If there are any validation errors, show an error message in the form and block progress.
// Console.logs the resultant data on the final page.