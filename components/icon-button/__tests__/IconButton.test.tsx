import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from '../src/index';

it('should render icon inside button element', () => {
  render(<IconButton icon={<h1>Icon</h1>} />);
  const button = screen.getByTestId('icon-btn');
  expect(button).toHaveTextContent('Icon');
});

it('should add disabled prop if disabled', () => {
  render(<IconButton icon={<h1>Icon</h1>} disabled />);
  const button = screen.getByTestId('icon-btn');
  expect(button).toHaveAttribute('disabled');
});

it('should call on click if clicked', async () => {
  const onClick = jest.fn();

  render(<IconButton icon={<h1>Icon</h1>} onClick={onClick} />);
  const button = screen.getByTestId('icon-btn');
  await userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

it('should not call on click if clicked and disabled', async () => {
  const onClick = jest.fn();

  render(<IconButton icon={<h1>Icon</h1>} onClick={onClick} disabled />);
  const button = screen.getByTestId('icon-btn');
  await userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});
