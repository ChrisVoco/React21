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
