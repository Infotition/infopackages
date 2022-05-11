import { render, screen } from '@testing-library/react';
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
