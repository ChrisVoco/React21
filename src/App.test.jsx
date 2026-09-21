import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the year filter and updates the selected year', async () => {
  const user = userEvent.setup();

  render(<App />);

  const filter = screen.getByLabelText(/filter by year/i);

  expect(filter).toHaveValue('2024');

  await user.selectOptions(filter, '2025');

  expect(filter).toHaveValue('2025');
});

test('adds a new expense from the form and displays it in the list', async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.type(screen.getByLabelText(/title/i), 'Groceries');
  await user.type(screen.getByLabelText(/price/i), '42.50');
  await user.type(screen.getByLabelText(/date/i), '2024-03-15');
  await user.click(screen.getByRole('button', { name: /add expense/i }));

  expect(screen.getByText('Groceries')).toBeInTheDocument();
  expect(screen.getByText('$42.50')).toBeInTheDocument();
});
