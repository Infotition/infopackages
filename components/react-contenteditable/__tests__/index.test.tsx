import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContentEditable } from '../src/index';

it('should render html prop in element', () => {
  render(<ContentEditable html="Editable content component" />);
  const div = screen.getByTestId('content-editable');
  expect(div).toHaveAttribute('contenteditable', 'true');
  expect(div).toHaveTextContent('Editable content component');
});

it('should wrap content in div by default', () => {
  render(<ContentEditable html="Editable content component" />);
  expect(screen.getByTestId('content-editable').tagName).toBe('DIV');
});

it('should change tag name of element based on prop', () => {
  render(<ContentEditable html="Editable content component" Tag="h1" />);
  expect(screen.getByTestId('content-editable').tagName).toBe('H1');
});

it('should render child html in element', () => {
  render(<ContentEditable html="<h1>Heading</h1>" />);
  expect(screen.getByTestId('content-editable').innerHTML).toBe(
    '<h1>Heading</h1>',
  );
});

it('should be able to disable editable', () => {
  render(<ContentEditable html="<h1>Heading</h1>" />);
  expect(screen.getByTestId('content-editable').innerHTML).toBe(
    '<h1>Heading</h1>',
  );
});

it('should default to useful values', () => {
  render(<ContentEditable />);
  const div = screen.getByTestId('content-editable');
  expect(div).toHaveTextContent('Edit me!');
  expect(div).toHaveAttribute('contenteditable', 'true');
  expect(div).toHaveAttribute('spellCheck', 'false');
});

it('should change value if user tries to type', async () => {
  const user = userEvent.setup();
  render(<ContentEditable html="Hello" />);

  const div = screen.getByTestId('content-editable');
  expect(div.innerHTML).toBe('Hello');
  await user.type(div, ' World');
  expect(div.innerHTML).toBe('Hello World');
});

it('should call callback functions', async () => {
  const user = userEvent.setup();
  const changeCallback = jest.fn();
  const blurCallback = jest.fn();
  const focusCallback = jest.fn();
  const keyCallback = jest.fn();

  render(
    <ContentEditable
      html="Hello"
      onChange={changeCallback}
      onFocus={focusCallback}
      onBlur={blurCallback}
      onKey={keyCallback}
    />,
  );

  const div = screen.getByTestId('content-editable');
  await user.type(div, ' World');

  expect(changeCallback).toHaveBeenCalledTimes(6);
  expect(focusCallback).toHaveBeenCalledTimes(1);
  expect(keyCallback).toHaveBeenCalledTimes(12);

  await user.keyboard('[Tab]');

  expect(blurCallback).toHaveBeenCalledTimes(1);
});

it('should not set class name if headless', async () => {
  render(<ContentEditable headless />);

  const div = screen.getByTestId('content-editable');
  expect(div.className).toBe('');
  expect(div).not.toHaveAttribute('class');
});
