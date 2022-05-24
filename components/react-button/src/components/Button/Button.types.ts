export type ButtonProps = {
  /** The label of the button. */
  label: string;
  /** Styling variant of the button. */
  variant?: 'contained' | 'outlined' | 'text';
  /** The type of the button. */
  type?: 'button' | 'reset' | 'submit';
  /** Whether the button elevation should get removed. */
  disableElevation?: boolean;
  /** The function which gets called after every click event.  */
  onClick?: VoidFunction;
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** Additional class names to add to the component. */
  className?: string;
  /** The color palette of the button. */
  color?: 'primary' | 'secondary' | 'success' | 'error';
  /** Whether the button should be full with. */
  full?: boolean;
  /** Whether the button should render a loading state. */
  loading?: boolean;
  /** The position of the loading spinner. */
  loadingPosition?: 'start' | 'end';
  /** The loading indicator to override the default spinner. */
  loadingIndicator?: string;
};
