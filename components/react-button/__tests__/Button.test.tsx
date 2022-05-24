import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../src/index';

it('should render label inside button element', () => {
  render(<Button label="Hello World" />);
  const button = screen.getByTestId('btn');
  expect(button).toHaveTextContent('Hello World');
});

it('should add relevant props to button', () => {
  render(<Button label="Hello World" disabled type="submit" />);
  const button = screen.getByTestId('btn');
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveAttribute('tabindex', '0');
});

it('should add full with class', () => {
  render(<Button label="Hello World" full />);
  const textfield = screen.getByTestId('btn');
  expect(textfield.classList.contains('full-width')).toBeTruthy();
});

it('should call on click if clicked', async () => {
  const onClick = jest.fn();

  render(<Button label="Hello World" onClick={onClick} />);
  const button = screen.getByTestId('btn');
  await userEvent.dblClick(button);

  expect(onClick).toHaveBeenCalledTimes(2);
});

it('should not call on click if clicked and disabled', async () => {
  const onClick = jest.fn();

  render(<Button label="Hello World" onClick={onClick} disabled />);
  const button = screen.getByTestId('btn');
  await userEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(0);
});

it('should only render spinner if only loading defined', () => {
  render(<Button label="Hello World" loading />);
  const button = screen.getByTestId('btn');
  expect(button.childNodes.length).toBe(1);
  expect(button).not.toHaveTextContent('Hello World');
});

it('should render spinner and label if position is defined', () => {
  render(<Button label="Hello World" loading loadingPosition="start" />);
  const button = screen.getByTestId('btn');
  expect(button.childNodes.length).toBe(2);
  expect(button).toHaveTextContent('Hello World');
});

it('should render loading indicator if provided', () => {
  render(
    <Button
      label="Hello World"
      loading
      loadingPosition="start"
      loadingIndicator="Loading..."
    />,
  );
  const button = screen.getByTestId('btn');
  expect(button.childNodes.length).toBe(1);
  expect(button).toHaveTextContent('Loading...');
});
