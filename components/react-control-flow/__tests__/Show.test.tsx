import { render, screen } from '@testing-library/react';
import { Show } from '../src/index';

it('should render child if when is true', () => {
  render(
    <Show when>
      <h1 data-testid="content">Renders</h1>
    </Show>,
  );

  const content = screen.getByTestId('content');
  expect(content).toHaveTextContent('Renders');
});

it('should not render child if when is false', () => {
  render(
    <div data-testid="content">
      <Show when={false}>
        <h1>Renders</h1>
      </Show>
    </div>,
  );

  const content = screen.getByTestId('content');
  expect(content.childNodes.length).toEqual(0);
});

it('should render fallback if provided if when is false', () => {
  render(
    <div data-testid="content">
      <Show when={false} fallback={<h1>Fallback</h1>}>
        <h1>Renders</h1>
      </Show>
    </div>,
  );

  const content = screen.getByTestId('content');
  expect(content).toHaveTextContent('Fallback');
});

it('should be able to render multiple children', () => {
  render(
    <div data-testid="content">
      <Show when={true}>
        <h1>Renders</h1>
        <p>Me too</p>
      </Show>
    </div>,
  );

  const content = screen.getByTestId('content');
  expect(content).toHaveTextContent('Renders');
  expect(content).toHaveTextContent('Me too');
  expect(content.childNodes.length).toEqual(2);
});
