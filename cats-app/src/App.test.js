import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Lista de gatos/i);
  expect(linkElement).toBeInTheDocument();
});
