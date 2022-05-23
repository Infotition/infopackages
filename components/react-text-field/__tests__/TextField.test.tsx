/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '../src/index';

it('should render plain text field if nothing is provided', () => {
  render(<TextField />);
  const textfield = screen.getByTestId('text-field');
  expect(textfield.childNodes.length).toBe(2);
});

it('should render label', () => {
  render(<TextField label="Hello World" />);
  const textfield = screen.getByTestId('text-field');
  expect(textfield).toHaveTextContent('Hello World');
});

it('should render helper text', () => {
  render(<TextField helper="Hello World" />);
  const below = screen.getByTestId('text-field-below');
  expect(below).toHaveTextContent('Hello World');
});

it('should render error over helper text', () => {
  render(<TextField helper="Hello World" error="Goodbye World" />);
  const below = screen.getByTestId('text-field-below');
  expect(below).toHaveTextContent('Goodbye World');
});

it('should add relevant props to input field', () => {
  render(<TextField maxLength={10} readonly required disabled />);
  const textfield = screen.getByTestId('text-field').querySelector('input');
  expect(textfield).toHaveAttribute('disabled');
  expect(textfield).toHaveAttribute('readonly');
  expect(textfield).toHaveAttribute('required');
  expect(textfield).toHaveAttribute('maxLength');
});

it('should add full with class', async () => {
  render(<TextField full />);
  const textfield = screen.getByTestId('text-field');
  expect(textfield.classList.contains('full-width')).toBeTruthy();
});

it('should not write if field is readonly', async () => {
  render(<TextField readonly value="Hello World" />);
  const textfield = screen.getByTestId('text-field').querySelector('input');
  await userEvent.type(textfield!, 'Goodbye World');
  expect(textfield!.value).toBe('Hello World');
});

it('should not write if field is disabled', async () => {
  render(<TextField disabled value="Hello World" />);
  const textfield = screen.getByTestId('text-field').querySelector('input');
  await userEvent.type(textfield!, 'Goodbye World');
  expect(textfield!.value).toBe('Hello World');
});

it('should add star to label if field is required', async () => {
  render(<TextField label="Required" required />);
  const textfield = screen.getByTestId('text-field');
  expect(textfield).toHaveTextContent('Required *');
});

it('should call on change if user types', async () => {
  const onChange = jest.fn();
  render(<TextField value="Hello" onChange={onChange} />);
  const textfield = screen.getByTestId('text-field').querySelector('input');
  await userEvent.type(textfield!, ' World');

  expect(onChange).toBeCalledTimes(6);
  expect(textfield!.value).toBe('Hello World');
});

it('should correctly render word count', async () => {
  render(<TextField maxLength={10} />);
  const textfield = screen.getByTestId('text-field').querySelector('input');
  const below = screen.getByTestId('text-field-below');

  expect(below).toHaveTextContent('0 / 10');
  await userEvent.type(textfield!, 'Hello');
  expect(below).toHaveTextContent('5 / 10');
});

it('should render password adornment automatically', async () => {
  render(<TextField type="password" />);
  const button = screen.getByTestId('text-field').querySelector('button');
  expect(button).toHaveTextContent('show password');
});

it('should change password type ', async () => {
  render(<TextField type="password" />);
  const button = screen.getByTestId('text-field').querySelector('button');
  const textfield = screen.getByTestId('text-field').querySelector('input');

  // Password -> Text
  expect(textfield!).toHaveAttribute('type', 'password');
  expect(button).toHaveTextContent('show password');
  await userEvent.click(button!);
  expect(textfield!).toHaveAttribute('type', 'text');
  expect(button).toHaveTextContent('hide password');

  // Text -> Password
  expect(textfield!).toHaveAttribute('type', 'text');
  expect(button).toHaveTextContent('hide password');
  await userEvent.click(button!);
  expect(button).toHaveTextContent('show password');
  expect(textfield!).toHaveAttribute('type', 'password');
});

it('should add adornments to the left', async () => {
  render(<TextField leftAdornment={<h1>Test</h1>} />);
  const textfield = screen.getByTestId('text-field');
  expect(textfield).toHaveTextContent('Test');
});
