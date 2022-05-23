import { render, screen } from '@testing-library/react';
import { ClientPortal } from '../src/index';

it('should mount element to selected element', () => {
  render(
    <div>
      <div id="portal" data-testid="portal"></div>
      <ClientPortal selector="#portal">
        <h1>Hello World</h1>
      </ClientPortal>
    </div>,
  );

  const content = screen.getByTestId('portal');
  expect(content).toHaveTextContent('Hello World');
});

it('should not mount anything if selector not found', () => {
  render(
    <div>
      <div id="portal" data-testid="portal"></div>
      <ClientPortal selector="#wrong">
        <h1>Hello World</h1>
      </ClientPortal>
    </div>,
  );

  const content = screen.getByTestId('portal');
  expect(content.innerHTML).toBe('');
});
