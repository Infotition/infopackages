/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createSplashAnimation } from '../src/index';

it('should add span element after click', async () => {
  render(
    <button
      data-testid="btn"
      onClick={(e) => createSplashAnimation(e, 'ripple')}
    ></button>,
  );
  const button = screen.getByTestId('btn');

  expect(button.childNodes.length).toBe(0);
  await userEvent.click(button);
  await userEvent.click(button);
  expect(button.childNodes.length).toBe(1);
});

it('added span element should have provided class', async () => {
  render(
    <button
      data-testid="btn"
      onClick={(e) => createSplashAnimation(e, 'ripple')}
    ></button>,
  );
  const button = screen.getByTestId('btn');
  await userEvent.click(button);

  expect(button.children[0].classList.contains('ripple')).toBeTruthy();
});

it('should position the element correctly', async () => {
  render(
    <div>
      <button
        style={{ width: '100px', height: '100px' }}
        data-testid="btn"
        onClick={(e) => createSplashAnimation(e, 'ripple')}
      >
        Test
      </button>
    </div>,
  );
  const button = screen.getByTestId('btn');

  await userEvent.pointer([
    {
      keys: '[MouseLeft]',
      target: button,
      coords: { clientX: 50, clientY: 50 },
    },
  ]);

  const span = button.getElementsByClassName('ripple')![0];

  expect(span.getAttribute('style')).toBe(
    'height: 0px; width: 0px; left: 50px; top: 50px; position: absolute; border-radius: 50%; transform: scale(0);',
  );
});
