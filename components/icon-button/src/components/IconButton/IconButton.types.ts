import { ReactElement } from 'react';

export type IconButtonProps = {
  /** The icon which gets rendered inside the button. */
  icon: ReactElement;
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** Additional class names to add to the component. */
  className?: string;
  /** The size of the button. */
  size?: 'small' | 'medium' | 'large';
  /** The function which gets called after an button click event. */
  onClick?: VoidFunction;
  /** The aria label of the icon button. */
  ariaLabel?: string;
};
